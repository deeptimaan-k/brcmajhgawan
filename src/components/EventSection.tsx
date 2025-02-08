interface Event {
  date: string;
  month: string;
  description: string;
}

interface EventSectionProps {
  events: Event[];
}

export function EventSection({ events }: EventSectionProps) {
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
        <div className="border-b-2 border-[#004d40] mb-4">
          <h3 className="text-xl font-bold text-[#004d40]">Upcoming Events</h3>
        </div>
        <div className="flex-1">
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="bg-[#004d40] text-white p-2 rounded text-center min-w-[60px]">
                  {event.date}<br />{event.month}
                </span>
                <span>{event.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}