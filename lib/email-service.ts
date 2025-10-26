import emailjs from "emailjs-com"

export async function sendEmail(data: any) {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
    )
    return response
  } catch (error) {
    console.error("Email sending failed:", error)
    throw error
  }
}
