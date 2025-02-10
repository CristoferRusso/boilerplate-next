// use client

import { toast } from "react-toastify";
import styles from "@/styles/Home.module.css";
import ToastContainerDefault from "@/components/ToastContainerDefault";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function About() {
  const notifySuccess = () => {
    toast.success("Questo è un messaggio di esempio!");
  };

  const notifyError = () => {
    toast.error("Questo è un messaggio di esempio!");
  };

  const notifyWarning = () => {
    toast.warning("Questo è un messaggio di esempio!");
  };

  const notifyInfo = () => {
    toast.info("Questo è un messaggio di esempio!");
  };

  return (
    <main className={`${styles.main}`}>
      <ToastContainerDefault />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          margin-top={100}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          onClick={notifySuccess}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Success <span>-&gt;</span>
          </h2>
        </a>
        <a
          onClick={notifyError}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Error <span>-&gt;</span>
          </h2>
        </a>
        <a
          onClick={notifyWarning}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Warning <span>-&gt;</span>
          </h2>
        </a>
        <a
          onClick={notifyInfo}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Info <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  );
}
