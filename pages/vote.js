import { useState } from "react";
import styles from "../styles/layout.module.css";
import buttons from "../styles/buttons.module.css";

export default function Vote() {
  const [selected, setSelected] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!selected) return;
    setHasVoted(true);

    // later → backend call here
    window.location.href = "/voters";
  };

  return (
    <>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.logo}>WhiteMatrix Vote</div>
        <button className={buttons.outline}>Logout</button>
      </div>

      {/* Page Content */}
      <div className={styles.container}>
        <h2>Choose Your Candidate</h2>
        <p style={{ color: "#6b7280", marginBottom: "30px" }}>
          You can vote only once
        </p>

        <div style={{ display: "flex", gap: "30px" }}>
          
          {/* Candidate 1 */}
          <div
            className={styles.card}
            style={{
              border: selected === 1 ? "2px solid #111827" : "1px solid #e5e7eb",
              cursor: "pointer",
              opacity: hasVoted ? 0.6 : 1,
            }}
            onClick={() => !hasVoted && setSelected(1)}
          >
            <img
              src="https://i.pravatar.cc/150?img=32"
              style={{ width: "140px", borderRadius: "50%", marginBottom: "20px" }}
            />

            <h3>Aleena</h3>
            <p>Frontend Engineer</p>
            <a href="#" target="_blank">LinkedIn Profile</a>
          </div>

          {/* Candidate 2 */}
          <div
            className={styles.card}
            style={{
              border: selected === 2 ? "2px solid #111827" : "1px solid #e5e7eb",
              cursor: "pointer",
              opacity: hasVoted ? 0.6 : 1,
            }}
            onClick={() => !hasVoted && setSelected(2)}
          >
            <img
              src="https://i.pravatar.cc/150?img=47"
              style={{ width: "140px", borderRadius: "50%", marginBottom: "20px" }}
            />

            <h3>Sara</h3>
            <p>Backend Engineer</p>
            <a href="#" target="_blank">LinkedIn Profile</a>
          </div>

        </div>

        <br />

        <button
          className={buttons.primary}
          disabled={!selected || hasVoted}
          onClick={handleVote}
        >
          {hasVoted ? "Vote Submitted" : "Cast Vote"}
        </button>
      </div>
    </>
  );
}
