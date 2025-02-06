// pages/about.js
export default function About() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Benvenuto nella pagina About!</h5>
          <p className="card-text">Ciao! Questa è una card centrata.</p>
          <a href="#" className="btn btn-primary">Scopri di più</a>
        </div>
      </div>
    </div>
  );
}
