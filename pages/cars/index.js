import Categories from "@/components/module/categories";
import SearchBox from "@/components/module/searchbox";
import CarsPages from "@/components/template/carspage";
import carsData from "@/data/carsdata";

function Details() {
  return (
    <div>
      <SearchBox/>
      <Categories/>
      <CarsPages data={carsData} />
    </div>
  );
}
export default Details;
