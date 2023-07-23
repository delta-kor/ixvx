import { MouseEventHandler } from 'react';
import Jelly from './Jelly';
import SvgIcon from './SvgIcon';

interface Props {
  video: Video;
  active?: boolean;
  onClick?: MouseEventHandler;
}

const CameraNameMap: Map<VideoType, string> = new Map();
CameraNameMap.set('main', 'MAIN');
CameraNameMap.set('full', 'FULL');
CameraNameMap.set('1take', '1TAKE');
CameraNameMap.set('tower', 'TOWER');
CameraNameMap.set('side', 'SIDE');
CameraNameMap.set('live', 'LIVE');
CameraNameMap.set('single_full', 'FULL');
CameraNameMap.set('single_face', 'FACE');

export default function CameraChip({ video: { type }, active, onClick }: Props) {
  if (type === 'single_face' || type === 'single_full') {
    return (
      <Jelly
        small
        onClick={onClick}
        className={`flex justify-center items-center w-[32px] h-[32px] rounded-sm cursor-pointer select-none ${
          active ? 'bg-gradient-to-r from-primary to-lightprimary' : 'bg-lightgray'
        }`}
      >
        <SvgIcon
          type={type === 'single_face' ? 'horizontal' : 'vertical'}
          className="w-[70%] h-[70%]"
        />
      </Jelly>
    );
  }

  return (
    <Jelly
      small
      onClick={onClick}
      className={`flex px-sm py-[6px] w-full flex-grow justify-center items-center gap-sm rounded-sm cursor-pointer select-none ${
        active ? 'bg-gradient-to-r from-primary to-lightprimary' : 'bg-lightgray'
      }`}
    >
      <SvgIcon type="horizontal" className="flex-shrink-0 w-[20px]" />
      <div className="text-[16px] font-[700] text-white">{CameraNameMap.get(type) || 'CAMERA'}</div>
    </Jelly>
  );
}
