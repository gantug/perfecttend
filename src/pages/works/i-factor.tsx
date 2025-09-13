import GoBack from "@/components/utils/GoBack";
import { useRouter } from "next/router";

export default function Works() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col  py-[64px] md:py-0"
      id="work"
    >
      <div className="flex flex-col gap-10 md:mt-[5rem]">
        <GoBack linkHref="#work" />
        <h1 className="text-xl md:text-4xl text-green-400 mb-10 font-bold">
          The Intuition training program
        </h1>
      </div>

      <h2 className="font-bold text-xl mb-5 italic">
        Course Background and Content
      </h2>

      <div className="flex flex-col gap-5 font-light text-white">
        <p>
          We are living in a time when the majority of people know more about
          their ‘Smart’ phone than the mechanisms of their own mind and more
          importantly HOW to learn and HOW to operate their own mind for best
          results. This trend needs to change if we are to have healthy, happy,
          truly successful people and a society in the future.
        </p>
        <p>
          Ivan is a pioneer in the area of HUMAN TECHNOLOGY. He like a growing
          number of people see that by developing ourselves and not just tools
          and technologies that we can have a much better quality of life in
          every sense, not just materialistically but have a full life.
        </p>

        <p>
          One of the keys to achieving more holistic success is to realize that
          you right now have within you incredible latent abilities that with
          the right mentoring will begin to be unleashed. Please note there is a
          huge amount of research to show the value of this approach.
        </p>

        <p>
          Ivan has spent all of his adult life not only researching Human
          Potential but more importantly practicing heightened perception, rapid
          learning and advanced concentration techniques allowing me to easily
          teach a beginner how to quickly learn the following human
          technologies:
        </p>

        <ul className="list-disc ml-5">
          <li>Mental Concentration</li>
          <li>Basic Telepathy (how to begin to experience this phenomenon)</li>
          <li>Intuition</li>
          <li>Clairvoyance</li>
          <li>Auric Vision</li>
        </ul>

        <p>
          <span className="font-bold">Please note:</span> <br />
          what makes Ivan unique in this area is not only his vast amount of
          experience and educational and psychology background but more his
          unmatched ability to DEMONSTRATE these abilities at will.
        </p>

        <p className="font-bold">Training courses available:</p>
        <ul className="list-disc ml-5">
          <li>1 to 1 individual coaching / 200 USD per session</li>
          <li>10 sessions recommended</li>
        </ul>
      </div>
    </div>
  );
}
