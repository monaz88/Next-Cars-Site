import { useState } from "react";
import styles from "./searchbox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const [min, setmin] = useState("");
  const [max, setmax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/$ ${min}/${max}`);
    } else {
      alert("please enter the mininum or maximum price");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="enter min-price"
          value={min}
          onChange={(e) => setmin(e.target.value)}
        />
        <input
          placeholder="enter max-price"
          value={max}
          onChange={(e) => setmax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBox;
