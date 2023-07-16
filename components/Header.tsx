import Link from 'next/link';
import Jelly from './Jelly';
import SvgIcon from './SvgIcon';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <Link href={'/'}>
      <div className="fixed top-0 left-0 right-0 flex px-xl py-lg w-full gap-lg items-center bg-background z-10 cursor-pointer select-none">
        <Jelly small>
          <SvgIcon type="logo" color="white" className="w-2xl h-xlshrink-0" />
        </Jelly>
        <Jelly small>
          <div className="text-heading1 text-white grow truncate">{title}</div>
        </Jelly>
      </div>
    </Link>
  );
}
