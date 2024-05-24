import CarList from "@/components/template/carlist";
import carsData from "@/data/carsdata";

function Suv() {
      const suvCar = carsData.filter(car=> car.category==='suv')
      return (
            <CarList data={suvCar} />
        );
}

export default Suv;