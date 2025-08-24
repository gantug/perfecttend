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

        <h1 className="text-xl md:text-4xl text-white mb-10 font-bold">
          Zoom or in person:{" "}
          <span className="text-green-400">One-to-one session</span>
        </h1>
      </div>

      <div className="flex flex-col gap-5 font-light">
        <p>
          ONE to ONE sessions in person OR via Zoom, with Ivan Hopkins –
          Psychologist and Mind coach. Expert in advanced Concentration and
          Relaxation techniques. Sessions are tailored to individual
          requirements and desired outcomes. Sessions can be based around
          mindfulness, stress management, holistic psychotherapy, positive
          psychology techniques, and performance coaching.
        </p>
        <p>
          A single session costs 180 EUR or 200 USD. For best results, it is of
          course generally necessary to have several sessions as I find clients
          get more in depth results by having several sessions.
        </p>
        <p>
          With individuals, I assist my clients with learning to relax, managing
          stress and developing his/her ability to achieve desired outcomes.
          This is in line with the latest research in both positive psychology
          and other psychology principles. I teach clients to focus on desired
          outcomes SFT (Solution Focused Therapy), rather than on problems and
          applying the best of CBT as well as NLP helping to reduce ‘negative
          self-talk’ and at the same developing more inner resilience. In
          alignment with positive psychology and other holistic paradigms, I
          believe that all people have within them the solutions and potential
          to create the life and lifestyle they desire. I believe this is made
          more likely by the person tapping into their true Self lying partially
          dormant inside.
        </p>

        <p>
          The course of sessions includes weekly or fortnightly sessions (
          depending on your schedule) and a follow up review and consolidation
          session a month later. All sessions are by appointment only.
        </p>
      </div>
    </div>
  );
}
