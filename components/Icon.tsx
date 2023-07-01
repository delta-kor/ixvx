import { IconBaseProps } from 'react-icons';
import { BiChevronRight, BiSolidBox, BiSolidRightArrow } from 'react-icons/bi';

const Icons = {
  logo: BiSolidBox,
  chevron_right: BiChevronRight,
};

export type IconType = keyof typeof Icons;

interface Props extends IconBaseProps {
  type: IconType;
}

export default function Icon({ type, ...props }: Props) {
  if (!Icons[type]) throw new Error('Invalid icon type');
  const Component = Icons[type];
  return <Component {...props} />;
}
