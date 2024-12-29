import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <span>Label</span>
    </header>
    <main className={styles.main}>
      <h1 className={styles.h1}>Undetectable Papers & Assignments</h1>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <p>- Fast and quality academic assignments</p>
          <p>- Text to wats up +38099771243 (time zone - Eastern European Time (EET), which is UTC+2)</p>
          <p className={styles.pEnd}>Need help with academic assignments? I’m here to make it easy! From research to writing, I’ll guide you step by step. Save time, reduce stress, and achieve great results. Let’s tackle your academic challenges together—no more struggle, just success!</p>
        </div>
        <Image className={styles.image} src='/IMG_9489.WEBP' fill style={{objectFit: 'contain'}} alt="Picture of the author"/>
      </section>
    </main>
    <footer className={styles.footer}>
      <p className={styles.pFooter}>© All rights reserved</p>
    </footer>
    </>
  );
}
