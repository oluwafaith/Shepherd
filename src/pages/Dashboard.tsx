import React from 'react';
import { MdOutlineLibraryBooks } from 'react-icons/md';
function Dashboard() {
  return (
    <main className="flex  bg-white">
      <aside className="h-screen w-1/6 border-r-2 border-blue-400 bg-white "></aside>

      <section className=" mr-2 h-screen  w-5/6 border-r-2  border-black  ">
        <section className="h-1/6 bg-gray-100"></section>

        <section className=" flex h-2/6 justify-around">
          <aside className="m-2  w-2/5 rounded-lg border-solid border-gray-500 ">
            <article className="bg-green-200">
              <h3 className="flex items-center justify-start ">
                <span className="mr-2">
                  <MdOutlineLibraryBooks />
                </span>
                Weekly Summary
              </h3>
              <div className="flex justify-between">
                <div>
                  <h4>Cards studied</h4>
                  <p>0 cards</p>
                </div>
                <div className="">
                  <h4>Time studied</h4>
                  <p>05hrs 30mins</p>
                </div>
              </div>
            </article>
            <article className=" bg-blue-100">
              <h4>Flashcard Performance</h4>
              <article className="flex">
                <div className="flex">
                  <p className="h-4 w-4 border-solid border-black bg-red-100"></p>
                  <span>Got it right</span>
                  <span>40%</span>
                </div>
              </article>
            </article>
          </aside>
          <div className="m-2 w-3/5 rounded-md border-solid bg-purple-400"></div>
        </section>

        <section className="flex h-3/6 bg-green-400">
          <div className="m-2 w-3/5 rounded-md border-solid bg-purple-400"></div>
          <div className="m-2  w-2/5 rounded-lg border-solid bg-yellow-400"></div>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
