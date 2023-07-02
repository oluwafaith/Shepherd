import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { RiCalendar2Fill } from 'react-icons/ri';
import Dropdown from './Dropdown';
function Activity() {
  return (
    <section className="m-2 flex items-center justify-between ">
      <article className="flex ">
        <p className="flex items-center ">
          <span className="mr-2 text-blue-600">
            <BsLightningChargeFill />
          </span>
          Activity Feed
        </p>
        {/* <select className="w-8">
          <option value="">
            <RiCalendar2Fill />
          </option>
        </select> */}
      </article>
      <article>
        <Dropdown />
      </article>
    </section>
  );
}

export default Activity;
