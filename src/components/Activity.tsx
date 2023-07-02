import { BsLightningChargeFill } from 'react-icons/bs';

import Dropdown from './Dropdown';

function Activity() {
  return (
    <section className="m-2 flex items-center justify-between border-b border-gray-300 pb-2">
      <article className="flex">
        <p className="flex items-center">
          <span className="mr-2 text-blue-600">
            <BsLightningChargeFill />
          </span>
          Activity Feed
        </p>
      </article>
      <article>
        <Dropdown />
      </article>
    </section>
  );
}

export default Activity;
