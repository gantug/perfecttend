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
          Corporate training workshop
        </h1>
      </div>

      <div className='flex flex-col gap-5 font-light'>
        <p>
          Most medium to large and nearly all large companies or corporations
          have some psychology consultant or coach as part of the management
          board. Leaders are now recognizing the value of employing experts in
          the area of human behavior to achieve greater and greater success.
        </p>
        <p>
          Recent research outlines clearly that sayings such as ‘a happy worker
          is a productive worker’, ‘without a vision, a company will perish’ and
          that ‘our focus determines our reality’. Are among the key mottos for
          corporations who want to thrive in the 21st corporate world. Research
          in psychology also has provided us with the practical means to achieve
          both greater success while at the same time benefiting both the
          management and the staff in professional and personal life.
        </p>
        <p>
          Positive psychology brings a new dimension into corporate wellness and
          executive coaching, focusing on the positive side of human nature, on
          cultivating strengths, and creating the conditions for maximum
          employee flow and engagement, using interventions that are
          scientifically proven to be effective.
        </p>

        <h2 className='text-2xl font-bold text-green-400'>
          Performance and Mindfulness workshops
        </h2>

        <ul className='list-disc ml-5'>
          <li>Leadership strategies</li>
          <li>Setting long-term and short-term goals</li>
          <li>Mindfulness Based Stress Reduction techniques</li>
          <li>Concentration and attention development techniques</li>
          <li>The latest Communication techniques and Skills</li>

          <li>Team-building exercises</li>
          <li>Productivity</li>
          <li>Efficiency training</li>
        </ul>

        <p>
          Each workshop includes practical techniques to improve productivity as
          well as practice and tips on incorporating mindfulness into the
          workplace. Workshops are participative rather than lecture-based, are
          fun and rewarding for participants, and the skills learned encourage
          intrinsic motivation and natural positive reinforcement.
        </p>
      </div>
    </div>
  );
}
