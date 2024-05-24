import CarList from "@/components/template/carlist";
import carsData from "@/data/carsdata";

const Sport = () => {
      const sportCar = carsData.filter(car=> car.category==='sport')
      return (
            <CarList data={sportCar} />
        );
}
 
export default Sport;