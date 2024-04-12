import React from "react";

// Icon component to render SVG icons
export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      className={`fill-current ${className}`} // Applying classes for styling
      width={size.toString() + "px"} // Setting width dynamically based on size prop
      height={size.toString() + "px"} // Setting height dynamically based on size prop
    >
      <use xlinkHref={`/icons/solid.svg#${name}`} /> {/* Using SVG sprite */}
    </svg>
  );
}
