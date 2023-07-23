import Link from 'next/link';
import Jelly from './Jelly';
import SvgIcon from './SvgIcon';
import Icon from './Icon';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <Link href="/">
      <div className="fixed top-[0] left-[50%] translate-x-[-50%] max-w-[1024px] flex px-xl py-lg w-full justify-between items-center bg-background z-10 cursor-pointer select-none">
        <div className="flex gap-lg items-center">
          <Jelly small>
            <SvgIcon type="logo" color="white" className="w-2xl h-xl shrink-0" />
          </Jelly>
          <Jelly small>
            <div className="text-heading1 text-white grow truncate">{title}</div>
          </Jelly>
        </div>
        <Link href="/info">
          <Jelly small>
            <Icon type="info" color="white" className="w-[20px] h-[20px] shrink-0" />
          </Jelly>
        </Link>
      </div>
    </Link>
  );
}
