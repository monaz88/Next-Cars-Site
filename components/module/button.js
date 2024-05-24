import Link from "next/link";
import styles from "./button.module.css"


function AllButton() {
      return ( 
            <div>
                  <div className={styles.container}>
                        <Link href="/cars">See all carrs</Link>
                  </div>
            </div>
       );
}

export default AllButton;