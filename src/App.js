import { useState, useEffect } from "react";
import "./index.css";

import heroImg from "./assets/human.png";
import clockIcon from "./assets/clock.png";
import randomIcon from "./assets/random.png";
import smileIcon from "./assets/smile.png";

import latestIcon from "./assets/latest.png";
import cameraIcon from "./assets/camera.png";
import selfIcon from "./assets/self.png";
import peopleIcon from "./assets/people.png";


/* ================= PREMIUM HOW IT WORKS ================= */

function HowItWorks() {
  const [open, setOpen] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("how-section");
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight - 120) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const steps = [
    { title: "Upload Latest Photo", img: latestIcon, detail: "Upload latest image." },
    { title: "Instant CCTV Scan", img: cameraIcon, detail: "AI scans CCTV feeds." },
    { title: "Face Recognition Match", img: selfIcon, detail: "Model compares faces." },
    { title: "Family & Police Alert", img: peopleIcon, detail: "Authorities notified." }
  ];

  return (
    <section id="how-section" className="how-premium">
      <h2>How It Works</h2>

      <div className={`steps-wrap ${visible ? "show" : ""}`}>
        <div className="progress-line"></div>

        {steps.map((s, i) => (
          <div key={i} className="step-premium" onClick={() => setOpen(i)}>
            <div className="badge">{i + 1}</div>
            <img src={s.img} className="step-img" alt="" />
            <p>{s.title}</p>
            {i < steps.length - 1 && <div className="arrow-anim">➜</div>}
          </div>
        ))}
      </div>

      {open !== null && (
        <div className="modal-back" onClick={() => setOpen(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>{steps[open].title}</h3>
            <p>{steps[open].detail}</p>
            <button onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}


/* ================= APP ================= */

function App() {
  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">TraceAI</div>

        <div className="nav-links">
          <a>Home</a>
          <a href="#how-section">How It Works</a>
          <a>Report Case</a>
          <a>Features</a>
          <a>For Authorities</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>


      {/* HERO */}
      <section className="hero-split">

        <div className="hero-left">
          <h1>AI-Powered Missing Person Detection System</h1>

          <p className="hero-sub">
            Automated face recognition & real-time tracking
            to find loved ones quickly
          </p>

          <ul className="hero-points">
            <li>Real-Time CCTV Scanning</li>
            <li>Instant Match Alerts</li>
            <li>Safe & Secure Search</li>
          </ul>

          <div className="hero-actions">
            <button className="main-btn">Report Missing Person</button>
            <button className="secondary-btn">How It Works</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="" className="hero-image" />
        </div>

      </section>


      {/* INFO STRIP */}
      <section className="info-strip">

        <div className="info-card">
          <img src={clockIcon} className="info-img" alt="" />
          <div>
            <h4>Search Overwhelming?</h4>
            <p>We scan for you 24/7</p>
          </div>
        </div>

        <div className="info-card">
          <img src={randomIcon} className="info-img" alt="" />
          <div>
            <h4>Data Scattered?</h4>
            <p>We look through CCTV & media</p>
          </div>
        </div>

        <div className="info-card">
          <img src={smileIcon} className="info-img" alt="" />
          <div>
            <h4>Losing Hope?</h4>
            <p>Smart alerts help find faster</p>
          </div>
        </div>

      </section>


      {/* PREMIUM HOW IT WORKS */}
      <HowItWorks />


      {/* FOOTER */}
      <footer className="footer">
        © TraceAI Missing Person System
      </footer>

    </div>
  );
}

export default App;
