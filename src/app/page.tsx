"use client"
import React, { useState } from "react";
import SlotReel from "./components/gameslot";

const symbols = [
  "/buah.jpg",
  "/buah.jpg",
  "/buah.jpg",
  "/buah.jpg",
  "/buah.jpg",
  "/image(1).jpg",
  "/image(1).jpg",
  "/image(1).jpg",
  "/image(1).jpg",
  
];

export default function Home() {
  const [reels, setReels] = useState([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState<string>("");

  const spin = () => {
    setSpinning(true);
    setMessage("");
    let spins = 20;
    let interval = setInterval(() => {
      setReels([
        Math.floor(Math.random() * symbols.length),
        Math.floor(Math.random() * symbols.length),
        Math.floor(Math.random() * symbols.length),
      ]);
      spins--;
      if (spins === 0) {
        clearInterval(interval);
        setSpinning(false);
        setTimeout(checkWin, 300);
      }
    }, 70);
  };

  const checkWin = () => {
    if (reels[0] === reels[1] && reels[1] === reels[2]) {
      setMessage("🎉 JACKPOT! 🎉");
    } else if (reels[0] === reels[1] || reels[1] === reels[2] || reels[0] === reels[2]) {
      setMessage("Lumayan! Dapat dua simbol sama!");
    } else {
      setMessage("Coba lagi ya!");
    }
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ fontFamily: "cursive", fontWeight: 800, fontSize: 56, marginBottom: 16, color: "#e9d269" }}>SLOT ZEUS</h1>
      <div style={{display: "flex", gap: 16, marginBottom: 32}}>
        {reels.map((idx, i) => (
          <SlotReel key={i} symbol={symbols[idx]} spinning={spinning} />
        ))}
      </div>
      <button
        onClick={spin}
        disabled={spinning}
        style={{
          padding: "14px 44px",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 12,
          border: "none",
          background: "#e9d269",
          color: "#423c16",
          cursor: spinning ? "not-allowed" : "pointer",
          boxShadow: "0 6px 32px #0008"
        }}
      >
        {spinning ? "Spinning..." : "SPIN"}
      </button>
      <div style={{marginTop: 32, fontSize: 26, textAlign: "center", fontWeight: 700, minHeight: 30}}>
        {message}
      </div>
      <p style={{marginTop: 48, color: "#ccc", fontSize: 16}}>Ganti gambar di <b>/public/assets/</b> sesuai kebutuhan Zeus atau lainnya.</p>
    </main>
  );
}