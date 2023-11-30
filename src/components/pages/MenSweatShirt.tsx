import { mensCollections } from "@/lib/misc";
import Banner from "../custom/Banner/Banner";
import Collection from "../custom/Collection/Collection";

function MenSweatShirt() {
  return (
    <main className="flex flex-col justify-center  min-h-screen w-full">
      <Banner />
      <Collection
        collection_name="Men Sweat Shirt Collection"
        collectionItems={mensCollections}
      />
    </main>
  );
}

export default MenSweatShirt;
