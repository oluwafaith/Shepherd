import { EventData } from '../data/Data';

function Events() {
  return (
    <div>
      {EventData.map((item) => (
        <div
          key={item.id}
          className={`mb-2 rounded-lg border-l-8 border-s-orange-400 bg-${item.color}-100 z-40 p-2  text-sm  text-gray-500 dark:text-${item.color}-400`}
        >
          <p>{item.text}</p>
          <p className="flex items-center  ">
            {item.start}
            <span className="pl-1 pr-1">
              {item.icon}
            </span> {`${item.end} pm`} ({`${item.duration}hr`})
          </p>
          <span className="flex font-medium">
            {item.img}
            {item.img}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Events;
