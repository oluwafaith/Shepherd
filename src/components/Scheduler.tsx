import { endOfWeek, isWithinInterval, startOfWeek } from 'date-fns';
import { DayPicker, Row, RowProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Events from './Events';
import { AiFillLock } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa';
function CurrentWeekRow(props: RowProps) {
  const isDateInCurrentWeek = (dateToCheck: Date) => {
    const today = new Date();
    const start = startOfWeek(today);
    const end = endOfWeek(today);
    return isWithinInterval(dateToCheck, { start, end });
  };

  const isNotCurrentWeek = props.dates.every(
    (date) => !isDateInCurrentWeek(date)
  );

  if (isNotCurrentWeek) return <></>;

  return <Row {...props} />;
}

function Scheduler() {
  return (
    <>
      {/* header */}
      <article className="dark:gray-500 flex items-center justify-between border-b-2 pb-4">
        <div className=" ml-3 mt-2 flex items-center ">
          <span className="mr-3 text-blue-500">
            <AiFillLock />
          </span>
          <span className="font-semibold text-gray-500">Schedule</span>
        </div>
        <div className="mr-3 mt-2 text-gray-500">
          <FaBriefcase />
        </div>
      </article>{' '}
      {/* date  */}
      <DayPicker
        styles={{
          head_cell: {
            width: '60px',
          },
          table: {
            maxWidth: 'none',
          },
          day: {
            margin: 'auto',
          },
        }}
        components={{ Row: CurrentWeekRow }}
        showOutsideDays={true}
        mode="single"
        footer={<Events />}
      />
    </>
  );
}

export default Scheduler;
