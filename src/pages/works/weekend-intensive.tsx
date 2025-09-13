import GoBack from "@/components/utils/GoBack";
import { useRouter } from "next/router";

export default function Intensive() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col  py-[64px] md:py-0"
      id="work"
    >
      <div className="flex flex-col gap-10 md:mt-[5rem]">
        <GoBack linkHref="#work" />
        <h1 className="text-xl md:text-4xl text-green-400 mb-10 font-bold">
          Weekend intensive workshop introductory course of intuitive awareness
          {/* <span className='text-green-400'>One-to-one session</span> */}
        </h1>
      </div>

      <div className="flex flex-col gap-5 font-light text-white">
        <p>
          We are living in a time when the majority of people know more about
          their ‘Smart’ phone than the mechanisms of their own mind and more
          importantly HOW to learn and HOW to operate their own mind for best
          results. This trend needs to change if we are to have healthy, happy,
          truly successful people and a society in the future.
        </p>
        <p>
          I’m a pioneer in the area of HUMAN TECHNOLOGY. I like a growing number
          of people see that by developing ourselves and not just tools and
          technologies that we can have a much better quality of life in every
          sense, not just materialistically but have a full life.
        </p>

        <p>
          One of the keys to achieving more holistic success is to realize that
          you right now have within you incredible latent abilities that with
          the right mentoring will begin to be unleashed. Please note there is a
          huge amount of research to show the value of this approach.
        </p>

        <p>
          I have spent all of my adult life not only researching Human Potential
          but more importantly practicing heightened perception, rapid learning
          and advanced concentration techniques allowing me to easily teach a
          beginner how to quickly learn the following human technologies:
        </p>

        <ul className="list-disc ml-5">
          <li>Mnemonics</li>
          <li>Advanced Concentration training</li>
          <li>Visualization with Power</li>
          <li>Practical use of Intuition (for making decisions etc.)</li>
          <li>Physical and Mental relaxation</li>
        </ul>

        <p>1 day workshop</p>
        <ul className="list-disc ml-5">
          <li>Saturday from 10am ET</li>
          <li>Fee per person: 500 USD</li>
        </ul>

        <p>2 day workshop</p>
        <ul className="list-disc ml-5">
          <li>Spanning over Saturday and Sunday</li>
          <li>Starts Saturday at 10am ET</li>
          <li>Fee per person: 850 USD</li>
        </ul>
      </div>
    </div>
  );
}
