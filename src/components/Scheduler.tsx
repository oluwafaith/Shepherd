import React, { useState } from 'react';
import { endOfWeek, isWithinInterval, startOfWeek } from 'date-fns';

import { DayPicker, Row, RowProps } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

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
  const [selected, setSelected] = React.useState<Date>();
  return (
    <>
      <div>
        <div>
          <DayPicker
            components={{ Row: CurrentWeekRow }}
            showOutsideDays
            mode="single"
          />
        </div>
      </div>
    </>
  );
}

export default Scheduler;
