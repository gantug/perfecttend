import Link from 'next/link';
import { SlArrowLeft } from 'react-icons/sl';

export default function GoBack({ linkHref }) {
  return (
    <Link href={`/${linkHref}`}>
      <div className='flex flex-row gap-2 items-center font-light cursor-pointer group-hover'>
        <SlArrowLeft className='scale-75' />
        Go back
      </div>
    </Link>
  );
}
