import Card from "../module/card";
import styles from "./carspage.module.css";

function CarsPages({ data }) {
  return <div className={styles.container}>
  {data.map((car)=>(
    <Card key={car.id} {...car} />
  ))}
  </div>;
}
export default CarsPages;
