import { EventData } from '../data/Data';

function Events() {
  const bgClasses = {
    green: 'border-s-green-400',
    orange: 'border-s-orange-400',
    red: 'border-s-red-400',
  };
  const colorClasses = {
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    red: 'bg-red-100',
  };

  return (
    <div>
      {EventData.map((item) => (
        <div
          key={item.id}
          className={`mb-2 rounded-sm border-l-4 ${
            colorClasses[item.color as keyof typeof colorClasses]
          } z-40 p-1 ${
            bgClasses[item.color as keyof typeof bgClasses]
          } text-sm  text-gray-400 dark:text-${item.color}-400`}
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
