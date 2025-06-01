import React from "react";

export const Input = ({ className, ...props }) => (
  <input
    className={`border p-2 rounded-md w-full focus:ring focus:ring-blue-200 ${className}`}
    {...props}
  />
);
