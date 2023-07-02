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

export default function CameraChip({
  video: { type },
  active,
  onClick,
}: Props) {
  return (
    <Jelly
      small
      onClick={onClick}
      className={`flex px-sm py-xs justify-center items-center gap-2xs rounded-sm cursor-pointer select-none transition-colors ${
        active ? 'bg-primary' : 'bg-white'
      }`}
    >
      <Icon
        type="camera"
        className={`w-lg h-lg transition-colors ${
          active ? 'text-white' : 'text-primary'
        }`}
      />
      <div
        className={`text-[16px] font-[700] transition-colors ${
          active ? 'text-white' : 'text-primary'
        }`}
      >
        {CameraNameMap.get(type) || 'CAMERA'}
      </div>
    </Jelly>
  );
}
