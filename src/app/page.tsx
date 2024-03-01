import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1> Hello, Next.JS!</h1>
     <h2> Hello, Next.JS!</h2>
     <h3> Hello, Next.JS!</h3>
     <Link href={"/sobre"}>Sobre</Link>
    </main>
  );
}
