import { Button } from '@/components/ui/button';
import Navbar from './home/partials/01-navbar';

import Hero from './home/partials/02-hero';
import Idea from './home/partials/04-ideas-design';
import Tools from './home/partials/05-tools';
import Typical from './home/partials/06-typical-frontend';
import Bridging from './home/partials/07-bridging-design';
import MyJourney from './home/partials/08-my-journey';
import TrustedVoice from './home/partials/09-trusted-voice';
import FAQ from './home/partials/10-faq';

import RunningText from './home/partials/03-running-text';
import LetsBuild from './home/partials/11-lets-build';

export default function Home() {
  return (
    <div className='grid min-h-[2000px]'>
      <Navbar />
      <Hero />
      <RunningText />
      <Idea />
      <Tools />
      <Typical />
      <Bridging />
      <MyJourney />
      <TrustedVoice />
      <FAQ />
      <LetsBuild />
    </div>
  );
}
