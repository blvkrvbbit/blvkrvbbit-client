// import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ScrollSnap from '@/components/scroll-snap/scroll-snap.component';
import ScrollSnapSection from '@/components/scroll-snap/scroll-snap-section/scroll-snap-section.component';

export default function Home() {
  return (
    <div className='container'>
      <ScrollSnap>
        <section className='hero z-5'>
          <div className='relative top-[7.3rem] h-[80vh]'>
            <div className='space-y-2'>
              <div className='text-gray opacity-[0.15]'>{`<h1>`}</div>
              <h1 className='pl-4 tracking-wide text-4xl md:text-6xl'>
                blvk<span className='text-purple'>.rabbit()</span>
              </h1>
              <div className='text-gray opacity-[0.15]'>{`</h1>`}</div>
            </div>
            <h2 className='mt-2 tracking-widest font-semibold'>
              Frontend
              <span className='text-purple'> /</span> Backend Developer
            </h2>
            <div className='absolute bottom-0 flex justify-center items-center w-full text-5xl'>
              <Link href='#works'>
                <Icon
                  className='text-purple'
                  icon='fluent:chevron-down-20-filled'
                />
              </Link>
            </div>
          </div>
        </section>
        <ScrollSnapSection title={'works'}>
          <div className='text-2xl mb-6 font-semibold tracking-widest'>
            <span className='text-gray opacity-[0.15]'>.</span>works
            <span className='text-gray opacity-[0.15]'>()</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
            <div className='border h-[15rem] flex justify-center items-center'>
              Placeholder
            </div>
          </div>
        </ScrollSnapSection>
        <ScrollSnapSection title={'about'}>
          <div className='text-2xl mb-4 font-semibold tracking-widest'>
            <span className='text-gray opacity-[0.15]'>.</span>about
            <span className='text-gray opacity-[0.15]'>()</span>
          </div>
          <div className='space-y-4'>
            <p className='max-w-prose'>
              Hi, I&apos;m Jordan Myers, a passionate web developer with a knack
              for creating dynamic and responsive web applications. With
              extensive experience in{' '}
              <span className='text-purple font-semibold'>React</span>,{' '}
              <span className='text-purple font-semibold'>Next.js</span>, and
              <span className='text-purple font-semibold'> TypeScript</span>, I
              thrive on building user-friendly interfaces and solving complex
              problems.
            </p>
            <p className='max-w-prose'>
              I believe in the power of teamwork and enjoy collaborating with
              others to bring innovative ideas to life. Outside of coding,
              you&apos;ll often find me at tech meet-ups, staying up-to-date
              with the latest advancements in technology. I&apos;m also a big
              fan of games and am an avid coffee drinker.
            </p>
            <p className='max-w-prose'>
              Whether it&apos;s coding, learning, or just enjoying a good cup of
              coffee, I&apos;m always eager to connect and share experiences.
              Let&apos;s create something amazing together!
            </p>
          </div>
        </ScrollSnapSection>
        <ScrollSnapSection title={'contact'}>
          <div className='text-2xl mb-4 font-semibold tracking-widest'>
            <span className='text-gray opacity-[0.15]'>.</span>contact
            <span className='text-gray opacity-[0.15]'>()</span>
          </div>
        </ScrollSnapSection>
      </ScrollSnap>
    </div>
  );
}
