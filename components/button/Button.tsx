import { useState } from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
