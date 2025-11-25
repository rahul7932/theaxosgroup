# AI Consultancy Website

A professional Next.js website template for an AI consultancy business, ready to deploy on Vercel.

## Features

- 🎨 Modern, professional design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🚀 Optimized for Vercel deployment
- 🎯 Sections: Hero, Services, About, Team, Contact
- ♿ Accessible and SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Company Information

Update the following files with your company details:

- **Header** (`components/Header.tsx`): Replace "AI Consultancy" with your company name
- **Footer** (`components/Footer.tsx`): Update company name, description, email, and phone
- **Hero** (`components/Hero.tsx`): Update headline and value proposition
- **About** (`components/About.tsx`): Add your company's story and mission

### 2. Services Section

Edit `components/Services.tsx` to customize:
- Service titles and descriptions
- Icons (currently using emojis, can be replaced with icon libraries)
- Number of services displayed

### 3. Team Section

Update `components/Team.tsx`:
- Add team member names, roles, and bios
- Replace placeholder images (currently emojis) with actual photos
- Add or remove team members as needed

### 4. Contact Information

Update contact details in:
- `components/Contact.tsx`: Email and phone number
- `components/Footer.tsx`: Contact information

### 5. Form Submission

The contact form currently shows an alert. To make it functional:

1. Set up a form service (e.g., Formspree, EmailJS, or your own API)
2. Update the `handleSubmit` function in `components/Contact.tsx`
3. Add environment variables if needed (create `.env.local`)

### 6. Styling

- Colors: Edit `tailwind.config.ts` to change the primary color scheme
- Fonts: Update `app/layout.tsx` to use different Google Fonts
- Global styles: Modify `app/globals.css`

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run the deployment command:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Environment Variables

If you add any environment variables (e.g., for form submission), add them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About section
│   ├── Team.tsx        # Team section
│   └── Contact.tsx     # Contact form section
├── public/             # Static assets (images, etc.)
└── package.json        # Dependencies
```

## Next Steps

1. Replace all TODO comments with your actual content
2. Add your company logo and team photos
3. Customize colors and styling to match your brand
4. Set up form submission functionality
5. Add analytics (Google Analytics, etc.)
6. Optimize images and add meta tags for SEO

## Support

For Next.js documentation, visit [nextjs.org/docs](https://nextjs.org/docs)
For Vercel deployment help, visit [vercel.com/docs](https://vercel.com/docs)

