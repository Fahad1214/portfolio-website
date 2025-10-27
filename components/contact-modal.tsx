"use client";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    full_name: Yup.string()
      .min(2, "Name is too short")
      .required("Full Name is required"),
    subject: Yup.string()
      .min(5, "Subject is too short")
      .required("Subject is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters long")
      .required("Message is required"),
  });

  // Handle form submission and send data to HubSpot
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    const portalId = "47232901"; // Replace with your HubSpot Portal ID
    const formId = "e6b99314-d1b8-439d-ad3e-ccaab299577e"; // Replace with your HubSpot Form ID

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        {
          name: "full_name",
          value: values.full_name,
        },
        {
          name: "email",
          value: values.email,
        },
        {
          name: "subject",
          value: values.subject,
        },
        {
          name: "message",
          value: values.message,
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          resetForm();
          onClose(); // Close modal after successful submission
        } else {
          return response.json().then((errorData) => {
            console.error("Form submission failed:", errorData);
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/your-username", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}  >
      <DialogContent className=" max-h-[90vh] overflow-y-auto w-[92vw] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Start a Conversation
          </DialogTitle>
        </DialogHeader>

        <div className="lg:p-6">
          {/* Calendly Booking Option */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Book a Meeting</h3>
                <p className="text-sm text-muted-foreground">Schedule a call with me</p>
              </div>
            </div>
            <Button
              onClick={handleCalendlyClick}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Open My Calendar
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Contact Form Header */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Send a Message</h3>
                <p className="text-sm text-muted-foreground">I'll get back to you soon</p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              full_name: "",
              email: "",
              message: "",
              subject: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div>
                  <Field
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <ErrorMessage
                    name="full_name"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Field
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 bg-transparent cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
}
