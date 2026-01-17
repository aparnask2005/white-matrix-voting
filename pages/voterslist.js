import styles from "../styles/layout.module.css";

export default function Voters() {
  const voters = [
    { name: "Amit Patel", linkedin: "#" },
    { name: "Sneha Nair", linkedin: "#" },
    { name: "Rahul Mehta", linkedin: "#" },
  ];

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>WhiteMatrix Vote</div>
      </div>

      <div className={styles.container}>
        <h2>Voters</h2>
        <p style={{ color: "#6b7280" }}>
          Click a name to view LinkedIn profile
        </p>

        {voters.map((v, i) => (
  <a
    key={i}
    href={v.linkedin}
    target="_blank"
    className={styles.voter}
  >
    <div className={styles.voterName}>{v.name}</div>
    <div className={styles.voterLink}>View LinkedIn</div>
  </a>
))}

      </div>
    </>
  );
}
