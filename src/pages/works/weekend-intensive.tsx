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
        <p>Training courses available:</p>
        <ul className="list-disc ml-5">
          <li>1 to 1 individual coaching / 200 USD per session</li>
          <li>10 sessions recommended</li>
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
