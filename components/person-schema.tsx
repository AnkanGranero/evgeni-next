export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Evgeni Leonov",
    url: "https://evgenileonov.se",
    jobTitle: "Actor",
    image: "https://evgenileonov.se/Evgeni_Leonov_foto.jpg",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}