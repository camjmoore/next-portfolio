import * as React from "react";
import type { SVGProps } from "react";
const SvgTheme = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#71717a"
      fillRule="nonzero"
      stroke="#71717a"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 1 1 0 17Z"
    />
  </svg>
);
export default SvgTheme;
