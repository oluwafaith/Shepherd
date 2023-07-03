import { Activities } from '../data/Data';

const List = () => {
  return (
    <section className="mx-auto max-w-md overflow-hidden bg-white md:max-w-2xl">
      <ul className="relative">
        {Activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <li key={index} className="px-4 py-3">
              <div className="flex items-center">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 shadow">
                    <Icon className="text-orange-300" />
                  </div>
                  {index !== Activities.length - 1 && (
                    <div className=" absolute left-6 h-full w-0.5 bg-gray-300"></div>
                  )}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{activity.title}</h4>
                  <p className="text-gray-500">{activity.description}</p>
                  <p className="mt-1 text-xs text-gray-400">{activity.date}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
