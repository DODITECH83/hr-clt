import React, { useState } from "react";

function App() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    name: "",
    type: "ferie",
    start: "",
    end: "",
    note: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    setRequests([...requests, { ...form, status: "in attesa" }]);
    setForm({ name: "", type: "ferie", start: "", end: "", note: "" });
  }

  function updateStatus(index, newStatus) {
    const updated = [...requests];
    updated[index].status = newStatus;
    setRequests(updated);
  }

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>HR CLT – Gestione Richieste</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Invia una richiesta</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
          <input
            type="text"
            placeholder="Nome collaboratore"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="ferie">Ferie</option>
            <option value="permesso">Permesso</option>
            <option value="malattia">Malattia</option>
            <option value="altro">Altro</option>
          </select>

          <input
            type="date"
            value={form.start}
            onChange={(e) => setForm({ ...form, start: e.target.value })}
            required
          />

          <input
            type="date"
            value={form.end}
            onChange={(e) => setForm({ ...form, end: e.target.value })}
            required
          />

          <textarea
            placeholder="Note"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />

          <button type="submit">Invia richiesta</button>
        </form>
      </section>

      <section>
        <h2>Richieste ricevute (vista responsabile)</h2>

        {requests.length === 0 && <p>Nessuna richiesta presente.</p>}

        {requests.map((req, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px"
            }}
          >
            <p><strong>Nome:</strong> {req.name}</p>
            <p><strong>Tipo:</strong> {req.type}</p>
            <p><strong>Dal:</strong> {req.start}</p>
            <p><strong>Al:</strong> {req.end}</p>
            <p><strong>Note:</strong> {req.note}</p>
            <p><strong>Stato:</strong> {req.status}</p>

            {req.status === "in attesa" && (
              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => updateStatus(index, "approvata")}>Approva</button>
                <button onClick={() => updateStatus(index, "rifiutata")}>Rifiuta</button>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
