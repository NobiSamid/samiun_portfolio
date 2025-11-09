import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
       <div className="relative flex h-[50rem] w-full items-center justify-center bg-transparent absolute top-0 left-0">
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_100px)]",
          "dark:[background-image:radial-gradient(#e1f5ed_1px,transparent_1px)]",
        )} /> */}
      <div className=" flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Dynamic Web Experiences with Next.js"
          />  
          <p className='text-center text-blue-100 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Samiun, a passionate web developer specializing in building dynamic and responsive web applications using Next.js. Welcome to my portfolio!
          </p>
          <a href="#about">
            <MagicButton title="Show my work" />
          </a>
        </div>
      </div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-transparent"></div>
    </div>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic web Magic with Next.js
          </h2>
    </div>
  )
}

export default Hero;