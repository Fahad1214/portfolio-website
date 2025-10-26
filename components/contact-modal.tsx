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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}  >
      <DialogContent className=" max-h-[90vh] overflow-y-auto w-[92vw] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Start a Conversation
          </DialogTitle>
        </DialogHeader>

        <div className="lg:p-6">
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
