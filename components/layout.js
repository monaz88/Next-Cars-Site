import Link from "next/link";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" target="_blank">
          <h2>Mona-Car</h2>
          <p>Choose and buy your car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href="https://example.com" target="_blank">
         Car-Sale
        </a>
        {" | "}
       Developed By Mona © {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
