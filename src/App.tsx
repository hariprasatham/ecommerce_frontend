import Banner from "./components/custom/Banner/Banner";
import Collection from "./components/custom/Collection/Collection";
import { mensCollections, womenCollections, kidsCollections } from "@/lib/misc";

const App = () => {
  return (
    <main>
      <Banner />
      <Collection
        collection_name="Mens Collection"
        collectionItems={mensCollections}
      />
      <Collection
        collection_name="Women Collection"
        collectionItems={womenCollections}
      />
      <Collection
        collection_name="Kids Collection"
        collectionItems={kidsCollections}
      />
    </main>
  );
};

export default App;
