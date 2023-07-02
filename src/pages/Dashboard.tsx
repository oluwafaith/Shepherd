import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';
import Activity from '../components/Activity';
import List from '../components/List';
import Scheduler from '../components/Scheduler';
import Header from '../components/Header';
import Summary from '../components/Summary';
import Flashcard from '../components/Flashcard';
import CardFooter from '../components/CardFooter';
function Dashboard() {
  return (
    <main className="flex  bg-white">
      <aside className="h-screen w-1/6 border-r-2 border-blue-400 bg-white  ">
        <Sidebar />
      </aside>

      <section className=" ml-2 mr-2  h-screen w-5/6 border-r-2  border-black  ">
        <section className="h-0.5/6 m-2 ">
          <Header />
        </section>

        <section className=" h-2.5/6 relative  flex justify-around ">
          <aside className="m-2 w-2/5  flex-grow  flex-col rounded-lg border border-gray-200 bg-gray-300 shadow dark:border-gray-700 dark:bg-gray-800 ">
            <Summary />
            <hr />

            <Flashcard />
            <CardFooter />
          </aside>

          <div className="m-2  w-3/5 rounded-lg border border-gray-200 bg-blue-50 shadow dark:border-gray-700 dark:bg-gray-800">
            <BarChart />
          </div>
        </section>

        <section className="h-3.5/6 flex overflow-scroll ">
          <div className="m-2 w-3/5 rounded-lg border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800">
            <Activity />
            <List />
          </div>
          <div className="m-2  w-2/5 rounded-lg border border-gray-200  shadow dark:border-gray-700 dark:bg-gray-800">
            <Scheduler />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
