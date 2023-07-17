import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavBar from './posts/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="favicon.jpeg" />
      </Head>
      {<NavBar></NavBar>}
      <main>
        <h1 className={styles.title}>
          Read <Link href="/posts/AboutMe">About Me!</Link>
        </h1>

        <p className={styles.description}>
          Tyler Stamm: Software Developer
        </p>

        <div className={styles.grid}>
          <Link href="Projects.html" className={styles.card}>
            <h3>My Projects &rarr;</h3>
            <p>Learn about the various projects I've worked on and the code that made it happen!.</p>
          </Link>

          <Link href="https://nextjs.org/learn" className={styles.card}>
            <h3>Contact Card &rarr;</h3>
            <p>Want to Reach Out about a project or just need help? Find everything you need here!</p>
          </Link>

          <Link
            href=""
            className={styles.card}
          >
            <h3>My Blog Posts &rarr;</h3>
            <p>Discover the journey from Public Ed to Tech. Learn some tech along the way, and some valuable life lessons!</p>
          </Link>
        </div>
      </main>

      <footer>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </Link>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
