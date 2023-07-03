import { BsLightningChargeFill } from 'react-icons/bs';

function CardFooter() {
  return (
    <article className="mt-2 flex items-center ">
      <span className=" mr-1 text-orange-300">
        <BsLightningChargeFill />
      </span>
      Current Streak : <span className="ml-1 font-semibold">20 days</span>
    </article>
  );
}

export default CardFooter;
