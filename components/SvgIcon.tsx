// prettier-ignore

import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  type: 'vertical' | 'horizontal';
}

export default function SvgIcon({ type, ...props }: Props) {
  if (type === 'vertical')
    return (
      <svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect
          x="0.782959"
          y="0.725525"
          width="10.4338"
          height="18.549"
          rx="1"
          fill="url(#paint0_linear_52_1059)"
        />
        <rect
          x="3.58618"
          y="1.44995"
          width="4.82776"
          height="0.919464"
          rx="0.459732"
          fill="#4A4C4F"
        />
        <defs>
          <linearGradient
            id="paint0_linear_52_1059"
            x1="0.782959"
            y1="0.725525"
            x2="13.6153"
            y2="25.5588"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BADAFF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    );

  if (type === 'horizontal')
    return (
      <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect
          x="19.2743"
          y="0.783081"
          width="10.4338"
          height="18.549"
          rx="1"
          transform="rotate(90 19.2743 0.783081)"
          fill="url(#paint0_linear_52_668)"
        />
        <rect
          x="18.5498"
          y="3.5863"
          width="4.82776"
          height="0.919464"
          rx="0.459732"
          transform="rotate(90 18.5498 3.5863)"
          fill="#4A4C4F"
        />
        <defs>
          <linearGradient
            id="paint0_linear_52_668"
            x1="19.2743"
            y1="19.332"
            x2="30.0581"
            y2="0.98886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BADAFF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    );

  return null;
}
