import { endOfWeek, isWithinInterval, startOfWeek } from 'date-fns';

import { DayPicker, Row, RowProps } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import Events from './Events';
// import { useState } from 'react';

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
  // const [selected, setSelected] = useState<Date>();
  return (
    <>
      <div>
        <div>
          <DayPicker
            components={{ Row: CurrentWeekRow }}
            showOutsideDays
            mode="single"
            footer={<Events />}
          />
        </div>
      </div>
    </>
  );
}

export default Scheduler;
