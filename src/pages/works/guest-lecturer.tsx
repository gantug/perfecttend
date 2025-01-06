import GoBack from '@/components/utils/GoBack';

export default function Works() {
  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col  py-[64px] md:py-0'
      id='work'
    >
      <div className='flex flex-col gap-10 md:mt-[5rem]'>
        <GoBack linkHref='#work' />
        <h1 className='text-xl md:text-4xl text-green-400 mb-10 font-bold'>
          Corporate coaching fee
        </h1>
      </div>

      <div className='flex flex-col gap-5 font-light text-white'>
        <p>
          Ivan is a prolific speaker known for his engaging and enlightening
          presentations. He hosts a variety of workshops and courses on
          Psychology and Positive Living, designed to empower individuals to
          lead fulfilling lives. Additionally, he organizes speaking
          competitions and debates for college students, fostering intellectual
          growth and critical thinking skills.
        </p>
        <p>
          His expertise has earned him invitations to esteemed platforms such as
          TED Talk Mongolia and numerous corporate events. At these events, Ivan
          covers a range of topics including Workplace Productivity, The Power
          and Benefits of Everyday Mindfulness, and other relevant subjects.
        </p>

        <p>
          Colleagues, clients, and students alike admire Ivan for his animated
          delivery, entertaining style, and ability to inspire audiences with
          his tantalizing talks.
        </p>
      </div>
    </div>
  );
}
