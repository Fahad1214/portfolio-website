export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    let ip = forwarded ? forwarded.split(",")[0] : realIp || "127.0.0.1";

    console.log("Original IP:", ip);
    console.log("IPINFO_TOKEN exists:", !!process.env.IPINFO_TOKEN);

    const isLocalhost =
      ip === "127.0.0.1" ||
      ip === "::1" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.") ||
      ip.startsWith("172.");

    if (isLocalhost) {
      console.log("Localhost detected, using public IP for location data");
      // Use a public IP to get location data (this will show a general location)
      ip = ""; // Empty string makes ipinfo.io use the request's public IP
    }

    const response = await fetch(
      `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`
    );

    if (!response.ok) {
      console.error("IPINFO API error:", response.status, response.statusText);
      const errorText = await response.text();
      console.error("Error response:", errorText);

      return Response.json(
        {
          error: "IPINFO API error",
          status: response.status,
          ip: ip,
          city: "Unknown",
          region: "Unknown",
          country: "Unknown",
          loc: "N/A",
          org: "N/A",
          postal: "N/A",
          timezone: "N/A",
        },
        { status: 500 }
      );
    }

    const locationData = await response.json();
    console.log("Location data received:", locationData);

    return Response.json({
      ip: locationData.ip || ip,
      city: locationData.city || "Unknown",
      region: locationData.region || "Unknown",
      country: locationData.country || "Unknown",
      loc: locationData.loc || "N/A",
      org: locationData.org || "N/A",
      postal: locationData.postal || "N/A",
      timezone: locationData.timezone || "N/A",
    });
  } catch (error) {
    console.error("Location fetch error:", error);
    return Response.json(
      {
        error: "Failed to fetch location",
        ip: "Unknown",
        city: "Unknown",
        region: "Unknown",
        country: "Unknown",
        loc: "N/A",
        org: "N/A",
        postal: "N/A",
        timezone: "N/A",
      },
      { status: 500 }
    );
  }
}
