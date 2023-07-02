import { MdOutlineLibraryBooks } from 'react-icons/md';

function Summary() {
  return (
    <article className="bg-white p-2">
      <h3 className="mb-2  flex flex-grow items-center justify-start   text-lg font-semibold">
        <span className="mr-2">
          <MdOutlineLibraryBooks />
        </span>
        Weekly Summary
      </h3>

      <div className=" text-normal  flex justify-between text-gray-500 dark:text-gray-400">
        <div className=" flex flex-1  flex-col items-start ">
          <h4>Cards studied</h4>
          <p>
            <span className=" text-lg font-semibold text-black">0</span>cards
          </p>
        </div>
        <article className="flex  flex-1 flex-col items-start  pl-4  ">
          <h4>Time studied</h4>
          <p>
            <span className="text-lg font-semibold text-black">05</span>hrs{' '}
            <span className="text-lg font-semibold text-black">30</span>mins
          </p>
        </article>
      </div>
    </article>
  );
}

export default Summary;
