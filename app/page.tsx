"use client";

import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import {HoverBorderGradientDemo} from './components/Test'
import AnimatedBeam from './components/AnimatedBeam/index'


export default function Home() {
  return (
    <main  className="overflow-clip 
    inset-0 
    -z-10 h-full w-full bg-[#fafafa]
     bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px] ">
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <AnimatedBeam/>
      <Beliefs />
      <Wework/>
      <Ourteam />
      <Featured /> 
      <Manage />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  )
}
