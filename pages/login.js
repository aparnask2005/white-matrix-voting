import styles from "../styles/auth.module.css";
import buttons from "../styles/buttons.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to your account</p>

        <input className={styles.input} placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Password" />

        <button className={buttons.primary}>Login</button>

        <p style={{ margin: "16px 0" }}>
          <Link href="/forgot" className={styles.link}>
            Forgot password?
          </Link>
        </p>

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


        <p style={{ marginTop: "20px" }}>
          Don’t have an account?{" "}
          <Link href="/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
