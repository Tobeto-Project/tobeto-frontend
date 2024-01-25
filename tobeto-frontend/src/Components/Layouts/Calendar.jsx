import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting', start: new Date() },
  ]);

  function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // deselect the selected date
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
        <div>
          <div className="card p-5">
            <FullCalendar
              locales={[trLocale]}
              locale="tr"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              weekends={true}
              events={events}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={(arg) => console.log(arg)}
              eventsSet={(arg) => console.log(arg)}
            />
          </div>
        </div>
  );
};

export default Calendar;
