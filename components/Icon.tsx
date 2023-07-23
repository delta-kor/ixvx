import { IconBaseProps } from 'react-icons';
import { FaFeather } from 'react-icons/fa';
import {
  BiChevronLeft,
  BiChevronRight,
  BiSolidCloud,
  BiSolidVideo,
  BiSolidVolumeFull,
} from 'react-icons/bi';

const Icons = {
  logo: BiSolidCloud,
  chevron_right: BiChevronRight,
  chevron_left: BiChevronLeft,
  camera: BiSolidVideo,
  mic: BiSolidVolumeFull,
  info: FaFeather,
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
