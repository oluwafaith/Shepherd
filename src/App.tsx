import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Dashboard from './pages/Dashboard';
import BarChart from './components/BarChart';
import Activity from './components/Activity';
import Dropdown from './components/Dropdown';
import Stepper from './components/Stepper';
import Scheduler from './components/Scheduler';
import Events from './components/Events';
import Carousel from './components/Carousel';
function App() {
  return (
    <>
      {/* <List /> */}
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/list" element={<List />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/chart" element={<BarChart />} />
          <Route path="/calendar" element={<Scheduler />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
