'use client';

import { useMediaQuery } from 'react-responsive';
import Adfit from './Adfit';
import { useEffect, useState } from 'react';

export default function AdfitResponsive() {
  const [domLoaded, setDomLoaded] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  if (isMobile)
    return (
      <div className="max-w-[100vh] overflow-hidden">
        <Adfit width="320" height="100" unit="DAN-xV86nb088FvUbwGt" />
      </div>
    );
  else return <Adfit width="728" height="90" unit="DAN-C8up1n6K9pWRbmUs" />;
}
