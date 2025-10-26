# Hamza Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

1. Clone or download this project
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Modern, responsive design
- Dark/light mode support
- Contact form with EmailJS integration
- Smooth animations and transitions
- SEO optimized
- TypeScript for type safety

## Environment Variables

To use the contact form, add these environment variables to your `.env.local` file:

\`\`\`
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
\`\`\`

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS v4
- Radix UI Components
- EmailJS
- Lucide React Icons
