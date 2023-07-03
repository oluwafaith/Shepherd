import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';
import Activity from '../components/Activity';
import Feed from '../components/Feed';
import Scheduler from '../components/Scheduler';
import Header from '../components/Header';
import Summary from '../components/Summary';
import Flashcard from '../components/Flashcard';
import CardFooter from '../components/CardFooter';
function Dashboard() {
  return (
    <main className="flex  h-screen bg-white md:overflow-hidden">
      {/* left section */}
      <aside className="h-screen  bg-white  ">
        <Sidebar />
      </aside>

      {/* right section */}
      <section className=" mr-2 h-screen  w-5/6 border-black md:ml-2  md:border-r-2  ">
        <section className="h-0.5/6 m-2 ">
          <Header />
        </section>

        {/* summary and quiz performance */}
        <section className="  h-2.5/6 relative grid   md:flex md:justify-around ">
          {/* summary */}
          <aside className="m-2 w-full rounded-lg  bg-gray-200 bg-opacity-50  shadow dark:border-gray-700 dark:bg-gray-500 md:w-2/5 md:flex-grow md:flex-col md:border md:border-gray-200 ">
            <Summary />
            <hr />
            <Flashcard />
            <CardFooter />
          </aside>

          {/* quiz */}
          <div className="m-2 rounded-lg border border-gray-200 bg-gray-100 shadow dark:border-gray-700 dark:bg-gray-500 md:w-3/5">
            <BarChart />
          </div>
        </section>

        <section className="h-3.5/6 overflow-scroll  md:flex ">
          <div className="m-2 rounded-lg border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 md:w-3/5">
            <Activity />
            <Feed />
          </div>

          <div className="m-2  rounded-lg border border-gray-200 shadow  dark:border-gray-700 dark:bg-gray-800 md:w-2/5">
            <Scheduler />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
