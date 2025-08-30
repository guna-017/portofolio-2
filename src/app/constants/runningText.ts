import { StaticImageData } from 'next/image';
import Frame from '../../../public/icons/frame.png';
import AppDevelopment from '../../../public/icons/App_Development.png';
import WebsiteDevelopment from '../../../public/icons/Website_Development.png';
import ReactExpert from '../../../public/icons/React_Expert.png';
import PixelPerfect from '../../../public/icons/Pixel_Perfect.png';

type RunningTextProps = {
  src: StaticImageData;
  alt: string;
};
export const runningText: RunningTextProps[] = [
  {
    src: AppDevelopment,
    alt: 'text 1',
  },
  {
    src: Frame,
    alt: 'frame',
  },
  {
    src: WebsiteDevelopment,
    alt: 'text 2',
  },
  {
    src: Frame,
    alt: 'frame',
  },
  {
    src: PixelPerfect,
    alt: 'text 3',
  },
  {
    src: Frame,
    alt: 'frame',
  },
  {
    src: ReactExpert,
    alt: 'text 4',
  },
  {
    src: Frame,
    alt: 'frame',
  },
];
