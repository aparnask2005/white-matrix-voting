import styles from "../styles/auth.module.css";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Vote Submitted 🎉</h2>
        <p className={styles.subtitle}>
          Thank you for participating in the vote.
        </p>

        <Link href="/voters" className={styles.link}>
          View all voters →
        </Link>
      </div>
    </div>
  );
}
