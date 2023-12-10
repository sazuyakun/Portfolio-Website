import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className = " bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <div className='relative'>
      <GetStarted />
      <div className="gradient-04 z-0"/>
      <WhatsNew />
    </div>
    <World />
    <div className='relative'>
      <Insights />
      <div className="gradient-04 z-0"/>
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
