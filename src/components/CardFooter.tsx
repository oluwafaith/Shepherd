import { BsLightningChargeFill } from 'react-icons/bs';

function CardFooter() {
  return (
    <article className="mt-2 flex items-center text-gray-500 ">
      <span className="ml-2 mr-1 text-orange-300">
        <BsLightningChargeFill />
      </span>
      Current streak:{' '}
      <span className="ml-1 font-semibold text-gray-800">20 days</span>
    </article>
  );
}

export default CardFooter;
