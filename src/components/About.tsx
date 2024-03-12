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
      <div className='text-2xl md:text-4xl mb-10 font-semibold md:font-normal text-white'>
        About Ivan
      </div>
      <div className='grid grid-cols-1  md:grid-cols-2 gap-20 items-center'>
        <div className='flex flex-col gap-10'>
          <div className='text-xl text-white text-justify font-light'>
            Ivan is a Mind coach and Psychologist as well as a pioneer,
            practitioner and teacher of human potential . He has spent the last
            18 years in the area of positive psychology, holistic health and
            accelerated learning. He lives and works by the motto that ‘Results
            count’ and that anything we learn should be implemented into our
            daily lives to help us have a more fulfilled life.
          </div>

          <div className='text-xl text-white text-justify font-light'>
            In November 2019, Ivan co organized a set of international medical
            conferences where experts from Japan, Ireland, China and Mongolia
            shared and explored their understanding and the research in the area
            of pain free operations without the use of general anesthetic.
          </div>
        </div>

        <div className=''>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}
