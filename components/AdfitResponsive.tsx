'use client';

import { useMediaQuery } from 'react-responsive';
import Adfit from './Adfit';

export default function AdfitResponsive() {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  if (isMobile) return <Adfit width="320" height="100" unit="DAN-xV86nb088FvUbwGt" />;
  else return <Adfit width="728" height="90" unit="DAN-C8up1n6K9pWRbmUs" />;
}
