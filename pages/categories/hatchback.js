import CarList from "@/components/template/carlist";
import carsData from "@/data/carsdata";


const Hatchback = () => {
      const hatchbacksCars = carsData.filter(car=> car.category==='hatchback')
      return (
            <CarList data={hatchbacksCars} />
        );
}
 
export default Hatchback;