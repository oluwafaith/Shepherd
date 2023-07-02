import { FiActivity, FiStar, FiMessageCircle } from 'react-icons/fi';

const activities = [
  {
    title: 'Activity 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'June 28, 2023',
    icon: FiActivity,
  },
  {
    title: 'Activity 2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'June 29, 2023',
    icon: FiStar,
  },
  {
    title: 'Activity 3',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    date: 'June 30, 2023',
    icon: FiMessageCircle,
  },

  // Add more activities with their respective icons
];

const List = () => {
  return (
    <div className="mx-auto max-w-md overflow-hidden bg-white md:max-w-2xl">
      <ul>
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <li key={index} className="px-4 py-3">
              <div className="flex items-center">
                <div className="relative flex-shrink-0">
                  {index !== 0 && (
                    <div className="absolute -left-1 top-0 h-10 w-0.5 bg-gray-300"></div>
                  )}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shadow">
                    <Icon className="text-white" />
                  </div>
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
    </div>
  );
};

export default List;
