import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import { EventType } from '@/shared/types/event';
import { formatDate } from '@/lib/format';

const EventDetail = (event: EventType) => {
  return (
    <section className="lg:w-[800px] lg:mt-10">
      <Breadcrumb>
        <BreadcrumbList className="flex justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/brand/notice">이벤트</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{event.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2">이벤트 상세</h2>
        <hr className="border-t border-neutral-300 mb-6" />
        <div className="text-sm leading-relaxed whitespace-pre-line text-[#333] mb-8">
          이벤트 상세 내용에 대한 통 이미지가 들어갈 예정입니다.
        </div>
        <p className="text-xs text-neutral-500 mb-5 text-right">
          이벤트 기간:{' '}
          {`${formatDate(event.period.start)} ~ ${formatDate(event.period.end)}`}
        </p>
      </div>
    </section>
  );
};

export default EventDetail;
