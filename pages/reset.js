import styles from "../styles/auth.module.css";
import buttons from "../styles/buttons.module.css";
import Link from "next/link";

export default function Reset() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Set New Password</h2>
        <p className={styles.subtitle}>
          Choose a strong password for your account
        </p>

        <input
          type="password"
          className={styles.input}
          placeholder="New password"
        />

        <input
          type="password"
          className={styles.input}
          placeholder="Confirm new password"
        />

        <button className={buttons.primary}>Update Password</button>

        <p style={{ marginTop: "20px" }}>
          <Link href="/login" className={styles.link}>
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
