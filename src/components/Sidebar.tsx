import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData, SidebarDataB } from '../data/Data';
import { TbPinnedFilled } from 'react-icons/tb';
import { AiOutlineDown } from 'react-icons/ai';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleSidebar}
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        {showSidebar ? (
          <AiIcons.AiOutlineClose className="h-6 w-6" />
        ) : (
          <FaIcons.FaBars className="h-6 w-6" />
        )}
      </button>

      {showSidebar && (
        <div
          className="fixed left-0 top-0 z-30 h-screen w-screen bg-gray-900 opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-56 overflow-y-auto  border-r-2 border-blue-500 bg-white transition-all duration-300 ease-in-out dark:bg-gray-800 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        } sm:static sm:left-auto`}
        aria-label="Sidebar"
      >
        <div className="h-full bg-white px-3 py-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {SidebarData.map((item) => (
              <li key={item.id}>
                <Link
                  to="#"
                  className="flex items-center rounded-lg p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-500 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
            {SidebarDataB.map((item) => (
              <li key={item.id}>
                <Link
                  to="#"
                  className="flex items-center rounded-lg p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-500 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
            <li className="flex items-center text-gray-500 hover:bg-blue-50 hover:text-blue-500">
              <span className="pr-2">
                <TbPinnedFilled />
              </span>
              Pinned Notes{' '}
              <span className="pl-6">
                <AiOutlineDown />
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
