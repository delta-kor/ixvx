// prettier-ignore

import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  type: 'vertical' | 'horizontal' | 'logo';
}

export default function SvgIcon({ type, color, ...props }: Props) {
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
            <stop stopColor="#BADAFF" />
            <stop offset="1" stopColor="white" />
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
            <stop stopColor="#BADAFF" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    );

  if (type === 'logo')
    return (
      <svg viewBox="0 0 103 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M70.1047 37.0639C68.3202 23.009 56.2867 12.1065 41.75 12.1065C30.4963 12.1065 20.7208 18.6848 16.2577 29.0524C7.48674 31.6739 0.916656 39.9549 0.916656 48.8565C0.916656 60.1143 10.0756 69.2732 21.3333 69.2732H66.25C75.2578 69.2732 82.5833 61.9477 82.5833 52.9399C82.5833 45.2632 77.2546 38.8034 70.1047 37.0639Z"
          fill={color}
        />
        <path
          d="M102.828 11.9882C102.613 11.3582 102.045 10.9132 101.382 10.8616L91.88 10.1066L87.7683 1.00489C87.5 0.406557 86.905 0.0232239 86.25 0.0232239C85.595 0.0232239 85 0.406557 84.7317 1.00322L80.62 10.1066L71.1183 10.8616C70.4667 10.9132 69.905 11.3416 69.6833 11.9566C69.4617 12.5716 69.6183 13.2599 70.0867 13.7166L77.1083 20.5616L74.625 31.3149C74.4717 31.9799 74.74 32.6716 75.3017 33.0599C75.5883 33.2566 75.9183 33.3566 76.25 33.3566C76.5717 33.3566 76.895 33.2632 77.175 33.0766L86.25 27.0266L95.325 33.0766C95.905 33.4632 96.6667 33.4482 97.2333 33.0366C97.7967 32.6249 98.045 31.9032 97.8533 31.2332L94.805 20.5666L102.365 13.7632C102.86 13.3166 103.042 12.6199 102.828 11.9882Z"
          fill={color}
        />
      </svg>
    );

  return null;
}
