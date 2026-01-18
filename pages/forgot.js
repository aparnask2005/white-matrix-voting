import Link from "next/link";
import styles from "../styles/auth.module.css";
import buttons from "../styles/buttons.module.css";

export default function Forgot() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Forgot Password</h2>

        <p className={styles.subtitle}>
          Enter your email and we’ll send you a reset link
        </p>

        <input
          className={styles.input}
          type="email"
          placeholder="Email address"
        />

        <button className={buttons.primary}>
          Send Reset Link
        </button>

        <p style={{ marginTop: "20px" }}>
          Remember your password?{" "}
          <Link href="/login" className={styles.link}>
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
