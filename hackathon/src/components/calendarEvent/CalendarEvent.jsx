import "./CalendarEvent.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2023-12-26T10:00:00",
    end: "2023-12-26T12:00:00",
    eventColor: "#2ecc71",
  },
  {
    id: 2,
    title: "event 2",
    start: "2023-12-15T13:00:00",
    end: "2023-12-16T18:00:00",
    eventColor: "#2eccee",
  },
  { id: 3, title: "event 3", start: "2021-06-17", end: "2021-06-20" },
];
const CalendarEvent = () => {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
        }}
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        events={events}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
};

export default CalendarEvent;
