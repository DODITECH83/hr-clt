import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
      <aside
        style={{
          width: "260px",
          borderRight: "1px solid #e5e5e5",
          padding: "1.5rem",
          backgroundColor: "#f9fafb"
        }}
      >
        <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "2rem", color: "#1f2933" }}>
          HR CLT
        </h1>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span style={{ fontWeight: 600, color: "#111827" }}>Dashboard</span>
          <span style={{ color: "#4b5563" }}>Richieste</span>
          <span style={{ color: "#4b5563" }}>Notifiche</span>
          <span style={{ color: "#4b5563" }}>Impostazioni</span>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem", backgroundColor: "#ffffff" }}>{children}</main>
    </div>
  );
}

function LoginCollaboratore() {
  return (
    <div>
      <h2>Login Collaboratore</h2>
      <p>Qui metteremo il form di login per i collaboratori.</p>
    </div>
  );
}

function LoginResponsabile() {
  return (
    <div>
      <h2>Login Responsabile</h2>
      <p>Qui metteremo il form di login per i responsabili.</p>
    </div>
  );
}

function DashboardPlaceholder() {
  return (
    <SidebarLayout>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
        Dashboard HR CLT
      </h2>
      <p>
        La base dell&apos;app è pronta. Nel prossimo passo inseriremo richieste, approvazioni e notifiche.
      </p>
    </SidebarLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login-collaboratore" element={<LoginCollaboratore />} />
        <Route path="/login-responsabile" element={<LoginResponsabile />} />
        <Route path="/dashboard" element={<DashboardPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
