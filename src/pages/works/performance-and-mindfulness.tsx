import GoBack from '@/components/utils/GoBack';
import { useRouter } from 'next/router';
import { SlArrowLeft } from 'react-icons/sl';

export default function Works() {
  const router = useRouter();

  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col  py-[64px] md:py-0'
      id='work'
    >
      <div className='flex flex-col gap-10 md:mt-[5rem]'>
        <GoBack linkHref='#work' />
        <h1 className='text-xl md:text-4xl text-green-400 mb-10 font-bold'>
          Performance and mindfulness workshops
          {/* <span className='text-green-400'>One-to-one session</span> */}
        </h1>
      </div>

      <div className='flex flex-col gap-5 font-light text-white'>
        <p>
          In these interactive sessions, which generally last 2.5 hours, the
          staff learn practical techniques in Mindfulness and from the area of
          performance coaching. Workshops are tailor-made to suit the individual
          company. Below are some of the elements that are taught and explored
          during these coaching sessions:
        </p>
        <ul className='list-disc ml-5'>
          <li>Setting long-term and short-term goals</li>
          <li>Mindfulness Based Stress Reduction techniques</li>
          <li>Concentration and attention development techniques</li>
          <li>The latest Communication techniques and Skills</li>
          <li>Excelling at your job</li>
        </ul>
        <p>
          Each workshop includes mindfulness practice and tips on incorporating
          mindfulness into the workplace. Workshops are participative rather
          than lecture-based, are fun and rewarding for participants, and the
          skills learned encourage intrinsic motivation and natural positive
          reinforcement.
        </p>
      </div>
    </div>
  );
}
