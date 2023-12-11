import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Skills, WhatsNew, World } from '../sections';

const Page = () => (
  <div className = " bg-[#080808] overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <Skills />
    <Footer />
  </div>
);

export default Page;
