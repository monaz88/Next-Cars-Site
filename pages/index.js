import AllButton from "@/components/module/button";
import Categories from "@/components/module/categories";
import SearchBox from "@/components/module/searchbox";
import CarsPages from "@/components/template/carspage";
import carsData from "@/data/carsdata";

function Index() {
  const cars = carsData.slice(0,3);
  return (
    <div>
      <SearchBox />
      <Categories />
      <AllButton />
      <CarsPages data={cars} />
    </div>
  );
}
export default Index;
