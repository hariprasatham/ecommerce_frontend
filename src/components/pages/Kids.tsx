import { kidsCollections } from "@/lib/misc";
import Banner from "../custom/Banner/Banner";
import Collection from "../custom/Collection/Collection";

function Kids() {
  return (
    <main className="flex flex-col justify-center  min-h-screen w-full">
      <Banner />
      <Collection
        collection_name="Kids Collection"
        collectionItems={kidsCollections}
      />
    </main>
  );
}

export default Kids;
