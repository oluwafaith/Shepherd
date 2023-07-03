import { BsFillSquareFill } from 'react-icons/bs';
import Carousel from './Carousel';
import { Card } from '../data/Data';

function Flashcard() {
  const colorClasses = {
    green: 'text-green-500',
    orange: 'text-orange-500',
    red: 'text-red-500',
  };

  return (
    <article className="flex  bg-white pl-2 text-gray-400">
      <article className="border-r border-gray-300 pb-8 pr-2 text-sm md:flex-1">
        <h4 className="pb-3 pt-2 font-semibold">Flashcard Performance</h4>
        {Card.map((item) => (
          <div key={item.id} className="flex items-center pb-4">
            <span
              className={`${
                colorClasses[item.color as keyof typeof colorClasses]
              } mr-2`}
            >
              <BsFillSquareFill />
            </span>
            <span className="mr-2">{item.text}</span>
            <span>{` ${item.percent}%`}</span>
          </div>
        ))}
      </article>

      <article className="md:flex-1">
        <Carousel />
      </article>
    </article>
  );
}

export default Flashcard;
