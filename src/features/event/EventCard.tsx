import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/shared/components/ui/card';
import { EventType } from '@/shared/types/event';

interface Props {
  event: EventType;
}

const EventCard = ({ event }: Props) => {
  return (
    <Link href={`/event/${event.id}`}>
      <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer py-0">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              className="w-full object-cover"
              src={event.imageUrl}
              alt={event.title}
              width="200"
              height="100"
            />
            <img />
            <span
              className={`absolute top-2 left-2 ${event.isActive ? 'bg-rose-700' : 'bg-zinc-500'} text-white text-xs px-2 py-0.5 rounded-full shadow-sm`}
            >
              {event.isActive ? '진행중' : '종료'}
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-base font-semibold line-clamp-2">
              {event.title}
            </h2>
            <p className="text-xs text-neutral-400 mt-2">
              이벤트 기간
              {`${new Date(event.period.start).toLocaleDateString('ko-KR')} ~ ${new Date(event.period.end).toLocaleDateString('ko-KR')}`}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
