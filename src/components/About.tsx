import Lottie from 'react-lottie';
import AboutAnimation from '../animations/AboutAnimation.json';

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AboutAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E] to-[#11247C] px-[5.5%] py-20 md:py-0 flex flex-col justify-center'
      id='about'
    >
      <h2 className='text-2xl md:text-4xl mb-10 font-semibold md:font-normal text-white'>
        About Ivan
      </h2>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-20  pb-[6.5%]'>
        <div className='flex flex-col gap-10'>
          <p className='text-sm md:text-xl text-white text-justify font-light'>
            Ivan is a Mind coach and Psychologist as well as a pioneer,
            practitioner and teacher of human potential . He has spent the last
            20+ years in the area of positive psychology, holistic health and
            accelerated learning. He lives and works by the motto that ‘Results
            count’ and that anything we learn should be implemented into our
            daily lives to help us have a more fulfilled life.
          </p>

          <p className='text-sm md:text-xl text-white text-justify font-light'>
            In November 2019, Ivan co organized a set of international medical
            conferences where experts from Japan, Ireland, China and Mongolia
            shared and explored their understanding and the research in the area
            of pain free operations without the use of general anesthetic.
          </p>
          <p className='text-sm md:text-xl text-white text-justify font-light'>
            With a large proportion of the world glued to A.I. its potential and
            its possible devastating effect on society there are only a few
            people who are developing themselves and those they teach. One of
            the most effective – certainly in an applied way – is Ivan.
          </p>

          <p className='text-sm md:text-xl text-white text-justify font-light'>
            Ivan has spent over 20 years training, studying and applying what he
            has learnt from psychology, yoga, meditation, mindfulness, intuitive
            and perceptive training as well as his 25 plus years in the
            workplace rising the career ladder through achieving exceptional
            results with his clients in a variety of domains including:
            psychotherapy, teaching, managerial skills, healing, and more
            recently in human potential.
          </p>
          <p className='text-sm md:text-xl text-white text-justify font-light'>
            But perhaps what makes Ivan unique is that: Ivan is one of the few
            people in the world who can{' '}
            <span className='font-bold underline underline-offset-4'>
              DEMONSTRATE DETAILED INTUITIVE AWARENESS on demand*
            </span>{' '}
            – in other he can demonstrate the extraordinary (with any tricks) at
            the drop of a hat. *According to research in parapsychology - as few
            as{' '}
            <span className='underline underline-offset-4'>
              1 in 1000 claimed ‘psychics’
            </span>{' '}
            can demonstrate useful awareness at will. Ivan is one of these rare
            few. See video for one of many demos Ivan performs:
          </p>
          <p className='text-sm md:text-xl text-blue-200 text-justify font-light flex flex-col'>
            <a
              href='https://www.youtube.com/watch?v=jiforOAnXWs'
              target='_blank'
            >
              Intuition Expertise
            </a>
            <a
              href='https://www.youtube.com/watch?v=XSYRvLZLgmk'
              target='_blank'
            >
              My typical clairvoyance demonstrated
            </a>
          </p>
        </div>

        <div className='max-w-[600px] m-auto'>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}
