import React from "react";

const COLOR_MAP = {
  green: {
    border: "border-green-500",
    from: "from-green-300",
  },
  blue: {
    border: "border-blue-500",
    from: "from-blue-300",
  },
  purple: {
    border: "border-purple-500",
    from: "from-purple-300",
  },
};

function TextGradient({ text, color = "green", size = "6xl" }) {
  const colors = COLOR_MAP[color] || COLOR_MAP.green;

  return (
    <div
      className={`px-4 capitalize border-l-4 bg-gradient-to-r to-transparent ${colors.border} ${colors.from}`}
    >
      <span
        className={`font-medium text-nowrap text-6xl text-neutral-900 md:text-${size}`}
      >
        {text}
      </span>
    </div>
  );
}

export default TextGradient;
