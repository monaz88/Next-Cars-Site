import CarList from "@/components/template/carlist";
import carsData from "@/data/carsdata";

const Sedan = () => {
      const sedanCar = carsData.filter(car=> car.category==='sedan')
      return (
            <CarList data={sedanCar} />
        );
}
 
export default Sedan;