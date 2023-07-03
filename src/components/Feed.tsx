import { Activities } from '../data/Data';

const Feed = () => {
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
                <div className="ml-4 text-gray-400">
                  <p className="mt-1 text-xs ">{activity.date}</p>
                  <p className=" md: mb-1 text-xs  text-gray-600 md:text-sm md:font-normal">
                    {activity.title}
                  </p>
                  <p className="">
                    <span className="rounded-xl border-2 border-dashed  border-gray-300 p-1 text-xs">
                      {activity.description}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Feed;
