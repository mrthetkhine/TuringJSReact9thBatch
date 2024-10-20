import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {Child} from "@/app/components/HelloWorld";
import SimpleJsx from "@/app/components/SimpleJsx";
import Greeting from "@/app/components/Greeting";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Welcome to Next.js
       {/* <HelloWorld/>
        <HelloWorld/>

          <Child/>*/}
         {/* <SimpleJsx/>*/}
         {/* <HelloWorld/>*/}
          <Greeting message={"Hi"}/>
          <Greeting message={"Good evening"}/>
      </main>

    </div>
  );
}
