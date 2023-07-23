import { Metadata } from 'next';
import { FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Info | SkyCon',
  description: 'SkyCon - Multicam Concert',
  openGraph: {
    description: 'SkyCon - Multicam Concert',
  },
};

export default function InfoPage() {
  return (
    <div className="flex flex-col gap-[36px] px-xl">
      <div className="flex flex-col gap-xs">
        <div className="flex gap-md items-center">
          <div className="text-[36px] font-bold text-white">SKYCON</div>
          <div className="text-[36px] font-normal text-white opacity-70">V1.0</div>
        </div>
        <div className="flex gap-md items-center">
          <FaGithub className="shrink-0 w-[16px] h-[16px] text-white opacity-50" />
          <div className="text-[16px] font-normal text-white opacity-70">
            <a href="https://github.com/delta-kor/ixvx" target="_blank">
              https://github.com/delta-kor/ixvx
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-xs">
        <div className="text-[16px] text-white italic opacity-70">
          Sincerely,
          <br />
          Seoyun Son
        </div>
        <a
          href="mailto: contact@izflix.net"
          className="text-[16px] text-white underline opacity-70"
        >
          contact@izflix.net
        </a>
      </div>
    </div>
  );
}
