
import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header>
        {home ? (
          <h1>My Next.js Blog</h1>
        ) : (
          <Link href="/">My Next.js Blog</Link>
        )}
      </header>

      <main>{children}</main>

      {!home && <Link href="/">← Back to home</Link>}
    </div>
  );
}
