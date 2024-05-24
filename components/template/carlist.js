import { useRouter } from "next/router";
import styles from "./carlist.module.css"
import Back from "../icons/Back";
import Card from "../module/card";


function CarList({ data }) {
      const router = useRouter();

      return (  
            <div className={styles.container}>
                  <div className={styles.back}>
                        <Back/>
                        <p>back</p>
                  </div>
                  <div className={styles.card}>
                   {data.map((item)=>(
                        <Card key={item.id} {...item}/>
                   ))}     
                  </div>

                

            </div>
      );
}

export default CarList;