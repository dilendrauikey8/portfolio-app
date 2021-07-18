import Acomplishments from '../components/Acomplishments/Acomplishments';
// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Courses from '../components/Courses/Courses';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {/* <BgAnimation /> */}
       </Section>
       <Education/>
      <Projects />
      <Technologies />
       <Courses/>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
