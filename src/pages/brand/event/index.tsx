import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import { eventData } from '@/data/event';
import EventCard from '@/features/event/EventCard';
import { EventType } from '@/shared/types/event';

const Event = () => {
  const eventList: EventType[] = eventData.sort(function compare(a, b) {
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <section className="lg:mt-10">
      <Breadcrumb>
        <BreadcrumbList className="justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>이벤트</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="lg:w-[1200px]">
        <div className="grid lg:grid-cols-3 gap-6">
          {eventList.map((item, index) => (
            <EventCard event={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
