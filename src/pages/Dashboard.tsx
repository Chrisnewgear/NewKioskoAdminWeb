export default function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(12, 1fr)' }}>
        <div className="card" style={{ gridColumn: 'span 3' }}>Stat A</div>
        <div className="card" style={{ gridColumn: 'span 3' }}>Stat B</div>
        <div className="card" style={{ gridColumn: 'span 3' }}>Stat C</div>
        <div className="card" style={{ gridColumn: 'span 3' }}>Stat D</div>
      </div>
      <div className="card" style={{ marginTop: '1rem' }}>Recent activity</div>
    </section>
  );
}
