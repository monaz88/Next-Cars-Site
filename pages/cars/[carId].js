import carsData from "@/data/carsdata";
import { useRouter } from "next/router";
import CarDetails from "@/components/template/cardetails";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const cardetails = carsData[carId - 1];
  
  return (
    <div>
      <CarDetails {...cardetails} />
      {/* cardetails here is props  */}
    </div>
  );
}
export default CarDetail;
