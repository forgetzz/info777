import React from "react";

type Props = {
  symbol: string;
  spinning?: boolean;
};

export default function SlotReel({ symbol, spinning }: Props) {
  return (
    <div style={{
      width: 96,
      height: 96,
      background: "#fff2",
      borderRadius: 18,
      border: "4px solid #e9d269",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: spinning ? "0 0 16px 4px #e9d26988" : "0 2px 8px #0005",
      transition: "box-shadow 0.2s"
    }}>
      <img
        src={symbol}
        alt="slot-symbol"
        style={{
          width: 64,
          height: 64,
          objectFit: "contain",
          filter: spinning ? "brightness(0.9) blur(1px)" : undefined,
          transition: "filter 0.2s"
        }}
      />
    </div>
  );
}