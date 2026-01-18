import styles from "../styles/layout.module.css";
import buttons from "../styles/buttons.module.css";

export default function Results() {
  const results = [
    {
      name: "Aleena",
      role: "Frontend Engineer",
      votes: 56,
      winner: true,
    },
    {
      name: "Sara",
      role: "Backend Engineer",
      votes: 44,
      winner: false,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.logo}>WhiteMatrix Vote</div>
        <button className={buttons.outline}>Logout</button>
      </div>

      {/* Page Content */}
      <div className={styles.container}>
        <h2>Election Results</h2>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          Final voting outcome
        </p>

        <div style={{ display: "flex", gap: "30px" }}>
          {results.map((candidate, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                border: candidate.winner
                  ? "2px solid #111827"
                  : "1px solid #e5e7eb",
              }}
            >
              <h3>{candidate.name}</h3>
              <p>{candidate.role}</p>

              <h1 style={{ margin: "20px 0" }}>{candidate.votes}%</h1>

              {candidate.winner && (
                <span
                  style={{
                    background: "#111827",
                    color: "white",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  Winner 🏆
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
