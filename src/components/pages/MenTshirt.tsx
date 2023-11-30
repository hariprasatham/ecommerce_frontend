import { mensCollections } from "@/lib/misc";
import Banner from "../custom/Banner/Banner";
import Collection from "../custom/Collection/Collection";

function MenTshirt() {
  return (
    <main className="flex flex-col justify-center  min-h-screen w-full">
      <Banner />
      <Collection
        collection_name="Men T-shirt Collection"
        collectionItems={mensCollections}
      />
    </main>
  );
}

export default MenTshirt;
