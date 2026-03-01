import { getLookbookCollections, getProductsBySlugs } from "@/lib/mock-data";
import {
  LookbookHero,
  LookbookCollectionSection,
  LookbookCta,
  LookbookSnapProvider,
} from "@/components/lookbook";

export const metadata = {
  title: "Lookbook | EN POINTE",
  description:
    "Explore our Spring/Summer 2026 lookbook — four curated collections of premium hosiery styled for every occasion.",
};

export default function LookbookPage() {
  const collections = getLookbookCollections();

  return (
    <>
      <LookbookSnapProvider />

      <LookbookHero />

      {collections.map((collection, index) => {
        const collectionProducts = getProductsBySlugs(collection.productSlugs);
        return (
          <LookbookCollectionSection
            key={collection.id}
            collection={collection}
            products={collectionProducts}
            index={index}
          />
        );
      })}

      <LookbookCta />
    </>
  );
}
