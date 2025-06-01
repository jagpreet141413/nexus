import React from "react";

export const Textarea = ({ className, ...props }) => (
  <textarea
    className={`border p-2 rounded-md w-full focus:ring focus:ring-blue-200 ${className}`}
    {...props}
  />
);
