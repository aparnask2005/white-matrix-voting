export default function CandidateCard({ candidate }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      width: "250px",
      borderRadius: "10px"
    }}>
      <img
        src={candidate.image}
        width="100%"
        style={{ borderRadius: "8px" }}
      />

      <h3>{candidate.name}</h3>
      <p>{candidate.role}</p>

      <a href={candidate.linkedin} target="_blank">
        LinkedIn Profile
      </a>

      <br /><br />

      <button style={{ width: "100%", padding: "10px" }}>
        Vote
      </button>
    </div>
  );
}
