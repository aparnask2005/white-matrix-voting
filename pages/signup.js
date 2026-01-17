import Link from "next/link";
import styles from "../styles/auth.module.css";
import buttons from "../styles/buttons.module.css";

export default function Signup() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Join to vote for your team</p>

        <input
          className={styles.input}
          placeholder="Full Name"
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
        />

        <button className={buttons.primary}>
          Create Account
        </button>

        <div className={styles.divider}>or</div>
 
  <div style={{ marginTop: "20px" }}>
  <button className={buttons.google}style={{ marginTop: "12px" }}>
    <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" width="18" />
    Continue with Google
  </button>

  <button className={buttons.linkedin} style={{ marginTop: "12px" }}>
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="18" />
    Continue with LinkedIn
  </button>
</div>

        <p className={styles.bottomText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
