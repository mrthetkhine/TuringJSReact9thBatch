import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h3>Welcome</h3>
          <Link
              className={`nav-item nav-link btn btn-primary`}
              href="/login"
          >
              Login
          </Link>
      </main>
      <footer className={styles.footer}>
        Copyright by Turing
      </footer>
    </div>
  );
}
