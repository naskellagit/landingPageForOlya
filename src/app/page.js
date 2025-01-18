import Image from "next/image";
import styles from "./page.module.css";
import image from '../../public/mainimage.webp'
import logo from '../../public/label.jpg'

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo"/>
    </header>
    <main className={styles.main}>
      <h1 className={styles.h1}>Undetectable Papers & Assignments</h1>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <div className={styles.topText}>
            <p>- Fast and quality academic assignments</p>
            <p>- Direct communication with your writer; no frustrating communication to managers unable to understand the essence of your request</p>
            <p>- Text to wats up +38099771243 (time zone - Eastern European Time (EET), which is UTC+2)</p>
          </div>
          <div className={styles.animationContainer}>
            <div>Turn Assignment Pain</div>
            <div className={styles.row2Block}>
              into
              <div className={styles.animationElement}>
                <div className={styles.animationText}>
                  <div>Academic gain</div>
                  <div>Future Success</div>
                </div>
            </div>
          </div>
        </div>
          <p className={styles.pEnd}>Need help with academic assignments? I’m here to make it easy! From research to writing, I’ll guide you step by step. Save time, reduce stress, and achieve great results. Let’s tackle your academic challenges together—no more struggle, just success!</p>
        </div>
        <Image className={styles.image} src={image} alt="Picture of the author"/>
      </section>
    </main>
    <footer className={styles.footer}>
      <p className={styles.pFooter}>© All rights reserved</p>
    </footer>
    </>
  );
}
