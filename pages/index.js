import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import { fetchPosts } from "@/lib/fetchPosts";  

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const posts = await fetchPosts(); 
  const data = await fetchData(); // Chiama la funzione per ottenere i dati

  return {
    props: {
      posts,
      data // Passa i dati come props alla pagina
    },
  };
}

export default function Home({ posts }) {

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/post/${post._id}`}
              className={styles.card}
            >
              <h2>
                {post.title} <span>-&gt;</span>
              </h2>
            </Link>
          ))}
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
