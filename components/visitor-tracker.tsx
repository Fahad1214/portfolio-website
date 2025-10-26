"use client";

import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function VisitorTracker() {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const sendVisitorEmail = async () => {
      if (emailSent) return;

      try {
        console.log("🔍 Fetching visitor location...");
        const locationResponse = await fetch("/api/visitor-location");

        if (!locationResponse.ok) {
          console.error(
            "❌ Location API error:",
            locationResponse.status,
            locationResponse.statusText
          );
        }

        const locationData = await locationResponse.json();
        console.log("📍 Location data received:", locationData);

        const currentDateTime = new Date().toLocaleString();

        const emailData = {
          date: currentDateTime,
          city: locationData.city || "N/A",
          region: locationData.region || "N/A",
          country: locationData.country || "N/A",
          ip: locationData.ip || "N/A",
          loc: locationData.loc || "N/A",
          org: locationData.org || "N/A",
          postal: locationData.postal || "N/A",
          timezone: locationData.timezone || "N/A",
        };

        console.log("🚀 Sending visitor email with data:", emailData);
        console.log("📧 EmailJS Config:", {
          serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        });

        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          emailData,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );

        console.log("✅ Visitor email sent successfully:", response);
        setEmailSent(true);
      } catch (error) {
        console.error("❌ Visitor email sending failed:", error);
      }
    };

    // Send email after a short delay to ensure page is loaded
    const timer = setTimeout(sendVisitorEmail, 2000);

    return () => clearTimeout(timer);
  }, [emailSent]);

  return null; // This component doesn't render anything
}
