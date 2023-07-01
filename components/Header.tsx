import Link from 'next/link';
import Icon, { IconType } from './Icon';

interface Props {
  title: string;
  icon: IconType;
}

export default function Header({ title, icon }: Props) {
  return (
    <Link href={'/'}>
      <div className="fixed top-0 left-0 right-0 flex px-xl py-lg w-full gap-lg items-center bg-background z-10 cursor-pointer select-none">
        <Icon type={icon} className="w-xl h-xl text-white shrink-0" />
        <div className="text-heading1 text-white grow truncate">{title}</div>
      </div>
    </Link>
  );
}
