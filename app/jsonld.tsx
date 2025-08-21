export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Perimetrales las Flores",
            url: "https://perimetraleslasflores.com",
            logo: "https://perimetraleslasflores.com/images/logo.png",
            sameAs: [
              "https://www.facebook.com/perimetraleslasflores",
              "https://www.instagram.com/perimetraleslasflores",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+5491112345678",
              contactType: "customer service",
              areaServed: "AR",
              availableLanguage: "Spanish",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://perimetraleslasflores.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://perimetraleslasflores.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  )
}
