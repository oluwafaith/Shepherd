import { BsFillSquareFill } from 'react-icons/bs';
import Carousel from './Carousel';

function Flashcard() {
  const card = [
    { percent: 40, text: 'Got it right', color: 'green', id: 1 },
    { percent: 40, text: "Don't remember", color: 'orange', id: 2 },
    { percent: 20, text: 'Got it wrong', color: 'red', id: 3 },
  ];

  const colorClasses = {
    green: 'text-green-500',
    orange: 'text-orange-500',
    red: 'text-red-500',
  };

  return (
    <article className="mb-2 flex bg-white pl-2 text-gray-400">
      <article className="flex-1 border-r border-gray-300 pr-2 text-xs">
        <h4 className="pb-2 pt-2 font-semibold">Flashcard Performance</h4>
        {card.map((item) => (
          <div key={item.id} className="flex items-center pb-2">
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

      <article className="flex-1">
        <Carousel />
      </article>
    </article>
  );
}

export default Flashcard;
