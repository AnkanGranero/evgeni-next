import fetchCVItems from "@/lib/contentful/cv/api";
import { renderRichText } from "@/lib/contentful/rich-text";

export default async function CVPage() {
  const cvItems = await fetchCVItems();
  console.log("cv", cvItems);

  return (
    <main className="content-grid">
      <ul className="mt-50 mb-20">
        {cvItems
          ? cvItems.map((item) => {
              return (
                
                <li key={item.fields.orderNumber} className="text-white text-2xl mb-20">
                    <h3 className="text-3xl text-center mb-8">{item.fields.category}</h3>
                  {renderRichText(item.fields.text)}
                </li>
              );
            })
          : ""}
      </ul>
    </main>
  );
}
