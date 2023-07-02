import { BsCloudSun } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
function Header() {
  return (
    <article className="mt-5">
      <h2 className=" text-lg  font-semibold">Hi Liam, Welcome back! </h2>
      <p className="flex items-center justify-start  text-gray-500">
        <span className=" mr-1 text-lg">
          <BsCloudSun />
        </span>
        {'  '}
        <span className="mr-1 text-xs text-gray-700">
          <GoDotFill />{' '}
        </span>
        Tuesday , July 21{' '}
        <span className="ml-1 mr-1 text-xs text-gray-700 ">
          <GoDotFill />
        </span>{' '}
        13:00
      </p>
    </article>
  );
}

export default Header;
