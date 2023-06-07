import React from "react";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  borderRadius: "5px",
  padding: "10px",
};
export const DarkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h3>Dark Layout</h3>
      <div style={style}>{children}</div>
    </>
  );
};
