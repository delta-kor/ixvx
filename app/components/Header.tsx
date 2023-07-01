import Icon, { IconType } from './Icon';

interface Props {
  title: string;
  icon: IconType;
}

export default function Header({ title, icon }: Props) {
  return (
    <div className="flex px-xl py-lg gap-lg items-center">
      <Icon type={icon} className="w-xl h-xl text-white shrink-0" />
      <div className="text-heading1 text-white grow truncate">{title}</div>
    </div>
  );
}
