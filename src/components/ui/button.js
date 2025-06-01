import React from "react";

export const Button = ({ className, children, ...props }) => (
  <button className={`py-2 px-4 rounded-lg font-medium ${className}`} {...props}>
    {children}
  </button>
);
