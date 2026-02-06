export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Electronic Thailand",
    description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนครบวงจร",
    url: "https://smartelectronic.co.th",
    logo: "https://smartelectronic.co.th/logo.png",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@smartelectronic.co.th",
    },
    sameAs: [
      "https://www.facebook.com/smartelectronicth",
      "https://line.me/ti/p/@SmartElecTH",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}