export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://innovyxworks.com/#organization",
        "name": "InnovyxWorks",
        "url": "https://innovyxworks.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://innovyxworks.com/logo.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+229-43053098",
          "contactType": "customer service",
          "email": "contact@innovyxworks.com",
          "availableLanguage": ["French", "English"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BJ",
          "addressLocality": "Cotonou",
          "addressRegion": "Littoral"
        },
        "sameAs": [
          "https://t.me/innovyxworks",
          "https://web.facebook.com/profile.php?id=61580934997021"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://innovyxworks.com/#localbusiness",
        "name": "InnovyxWorks",
        "description": "Agence de développement web et mobile au Bénin spécialisée dans la création d'applications mobiles et sites web pour entreprises africaines",
        "url": "https://innovyxworks.com",
        "telephone": "+229-43053098",
        "email": "contact@innovyxworks.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BJ",
          "addressLocality": "Cotonou",
          "addressRegion": "Littoral"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.3703,
          "longitude": 2.3912
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "€€",
        "serviceArea": {
          "@type": "Place",
          "name": "Afrique de l'Ouest"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://innovyxworks.com/#website",
        "url": "https://innovyxworks.com",
        "name": "InnovyxWorks",
        "description": "Développement web et mobile au Bénin",
        "publisher": {
          "@id": "https://innovyxworks.com/#organization"
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "Service",
        "name": "Développement d'applications mobiles",
        "description": "Création d'applications mobiles natives pour iOS et Android",
        "provider": {
          "@id": "https://innovyxworks.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Afrique de l'Ouest"
        },
        "offers": {
          "@type": "Offer",
          "priceRange": "800€-8000€+",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Service",
        "name": "Création de sites web",
        "description": "Développement de sites web professionnels et e-commerce",
        "provider": {
          "@id": "https://innovyxworks.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Afrique de l'Ouest"
        },
        "offers": {
          "@type": "Offer",
          "priceRange": "300€-3000€+",
          "priceCurrency": "EUR"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
