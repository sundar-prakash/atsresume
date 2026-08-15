import "../styles/globals.css";

export const metadata = {
  title: "ATSResume | Get hired with an ATS-optimized resume",
  description: "ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems.",
  keywords: "ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker",
  authors: [{ name: "Sundar Prakash", url: "https://github.com/sundar-prakash" }],
  creator: "Sundar Prakash",
  publisher: "Sundar Prakash",
  metadataBase: new URL("https://resumebuilder.zingbizz.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Resume Builder",
    description: "Create a professional, ATS-friendly resume in minutes.",
    siteName: "Resume Builder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://resumebuilder.zingbizz.com/assets/logo.png",
        width: 800,
        height: 600,
        alt: "ATSResume Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Builder",
    description: "Create a professional, ATS-friendly resume in minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://resumebuilder.zingbizz.com/",
  "logo": "https://resumebuilder.zingbizz.com/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9999999999",
    "contactType": "customer service"
  },
  "image": "https://resumebuilder.zingbizz.com/assets/logo.png",
  "description": "ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems.",
  "founder": "Sundar Prakash",
  "foundingDate": "2023",
  "foundingLocation": "IN",
  "email": "xyz@gmail.com",
  "telephone": "+91 9999999999",
  "areaServed": "IN",
  "keywords": "ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker",
  "mainEntityOfPage": "https://resumebuilder.zingbizz.com/",
  "knowsAbout": "ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker",
  "knowsLanguage": "English",
  "memberOf": "Sundar Prakash",
  "owns": "Sundar Prakash",
  "publishingPrinciples": "https://resumebuilder.zingbizz.com/",
  "slogan": "Get hired with an ATS-optimized resume"
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className={'content'}>
          {children}
        </div>
      </body>
    </html>
  );
}


