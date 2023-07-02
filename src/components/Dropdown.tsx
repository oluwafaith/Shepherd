/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { DropdownData } from '../data/sidebarData';
import { RiCalendar2Fill } from 'react-icons/ri';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(DropdownData[0].text);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = (event: any) => {
    const value = event.target.textContent;
    console.log(value);
    setSelected(value);
  };

  return (
    <>
      <button
        onClick={handleClick}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-100 dark:hover:bg-gray-100 dark:focus:ring-gray-100"
        type="button"
      >
        <span className="mr-4">
          <RiCalendar2Fill />
        </span>
        {selected}
        <svg
          className="ml-2 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className={`${
          open ? 'z-10' : 'hidden'
        } w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {DropdownData.map((item) => (
            <li key={item.id} onClick={handleSelect}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
