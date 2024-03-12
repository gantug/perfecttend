import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, Slide, toast } from 'react-toastify';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<any>(null);
  const [form, setForm] = useState<any>(null);

  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    message: null,
  });

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      finishSubmit();
    }
  }, [errors]);

  const finishSubmit = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID,
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          toast.success('Message sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
          });
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);

          toast.error('Something went wrong, please try again later!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
          });

          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setIsSubmitting(true);
    setForm(e.target);
    e.target.reset();
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const validateValues = (inputValues) => {
    let errors: any = {};

    if (inputValues.email.length == 0) {
      errors.email = 'Please, add your email.';
    }
    if (inputValues.name.length == 0) {
      errors.name = 'Please, add your name.';
    }
    if (!inputValues.message) {
      errors.message = 'Please, add your message.';
    }

    return errors;
  };

  return (
    <div
      className='min-h-screen px-[5.5%] md:py-[5.5%] flex flex-col justify-center bg-black'
      id='contact'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-20'>
        <div className='h-full'>
          <div className='text-2xl md:text-6xl text-white mb-10 font-medium'>
            Let's work together!
          </div>
          <div className='text-md md:text-xl text-white font-light'>
            Let me help you become even greater at what you do. <br />
            Fill out following form and we will get back to you in the next 24
            hours.
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className='flex flex-col gap-10'
        >
          <div className='flex flex-col'>
            <label className='text-white mb-2'>What's your name?</label>
            {errors.name && (
              <p className='font-light text-red-600 text-sm'>{errors.name}</p>
            )}
            <input
              type='text'
              name='name'
              placeholder='Type your full name'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-white  focus:border-gray-400 bg-transparent'
              value={inputFields.name}
              autoComplete='off'
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-white mb-2'>What's your email?</label>
            {errors.email && (
              <p className='font-light text-red-600 text-sm'>{errors.email}</p>
            )}
            <input
              type='text'
              name='email'
              placeholder='Type your email'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-white  focus:border-gray-400 bg-transparent'
              value={inputFields.email}
              autoComplete='off'
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-white mb-2'>What's your message?</label>
            {errors.message && (
              <p className='font-light text-red-600 text-sm'>
                {errors.message}
              </p>
            )}
            <input
              type='text'
              name='message'
              value={inputFields.message}
              autoComplete='off'
              onChange={handleChange}
              placeholder='Type your message'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-white  focus:border-gray-400 bg-transparent'
            />
          </div>

          <input
            className='text-white border border-white py-3 px-5 rounded-xl w-fit cursor-pointer hover:bg-white hover:text-black hover:border-transparent transition duration-300 m-auto md:m-0'
            type='submit'
            value='Send a message'
          />
        </form>
      </div>
    </div>
  );
}
