import { MouseEventHandler } from 'react';
import Icon from './Icon';
import Jelly from './Jelly';

interface Props {
  video: Video;
  active?: boolean;
  onClick?: MouseEventHandler;
}

const CameraNameMap: Map<VideoType, string> = new Map();
CameraNameMap.set('main', 'MAIN');
CameraNameMap.set('full', 'FULL');
CameraNameMap.set('1take', '1TAKE');
CameraNameMap.set('single_full', 'FULL');
CameraNameMap.set('single_face', 'FACE');

export default function CameraChip({
  video: { type },
  active,
  onClick,
}: Props) {
  return (
    <Jelly
      small
      onClick={onClick}
      className={`flex px-[6px] py-[2px] justify-center items-center gap-xs rounded-sm cursor-pointer select-none transition-colors ${
        active ? 'bg-primary' : 'bg-white'
      }`}
    >
      <Icon
        type="camera"
        className={`w-[14px] h-[14px] transition-colors ${
          active ? 'text-white' : 'text-primary'
        }`}
      />
      <div
        className={`text-[14px] font-[700] transition-colors ${
          active ? 'text-white' : 'text-primary'
        }`}
      >
        {CameraNameMap.get(type) || 'CAMERA'}
      </div>
    </Jelly>
  );
}
