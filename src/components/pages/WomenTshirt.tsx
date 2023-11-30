import { womenCollections } from "@/lib/misc";
import Collection from "../custom/Collection/Collection";
import Banner from "../custom/Banner/Banner";

function WomenTshirt() {
  return (
    <main className="flex flex-col justify-center  min-h-screen w-full">
      <Banner />
      <Collection
        collection_name="Women T-Shirt Collection"
        collectionItems={womenCollections}
      />
    </main>
  );
}

export default WomenTshirt;
