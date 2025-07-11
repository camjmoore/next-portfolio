import * as React from "react";
import type { SVGProps } from "react";
const SvgLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#71717a"
      stroke="#71717a"
      d="M9.66 8.53a.75.75 0 0 0-1.059-1.06zm-5.19 3.063a.75.75 0 0 0 1.06 1.062zm1.043-.016a.75.75 0 1 0-1.026 1.094zm3.105 4.97a.75.75 0 1 0 1.026-1.094zM5 11.374a.75.75 0 0 0 0 1.5zm10.37.75v.75h.002zm2.563 1.053.528-.532zm.317 2.558a.75.75 0 0 0 1.5-.004zM8.601 7.47l-4.13 4.124 1.059 1.062L9.66 8.53zm-4.114 5.202 4.13 3.876 1.027-1.094-4.13-3.876zm.513.203h10.37v-1.5H5zm10.372 0a2.87 2.87 0 0 1 2.032.834l1.057-1.063a4.37 4.37 0 0 0-3.093-1.271zm2.032.834a2.87 2.87 0 0 1 .846 2.027l1.5-.004a4.37 4.37 0 0 0-1.289-3.086z"
    />
  </svg>
);
export default SvgLeftArrow;
