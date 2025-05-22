import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import { NoticeDataType } from '@/shared/types/notice';
import { formatDate } from '@/lib/format';

const NoticeDetail = (notice: NoticeDataType) => {
  return (
    <section className="w-[800px] mt-10">
      <Breadcrumb>
        <BreadcrumbList className="flex justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/brand/notice">공지사항</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{notice.current.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">공지사항</h2>
        <h2 className="text-xl font-semibold mb-2">{notice.current.title}</h2>
        <hr className="border-t border-neutral-300 mb-6" />
        <div className="text-sm leading-relaxed whitespace-pre-line text-[#333] mb-8">
          {notice.current.content}
        </div>
        <p className="text-xs text-neutral-500 mb-5 text-right">
          작성일: {formatDate(notice.current.createdAt)}
        </p>
        <div className="border-t border-neutral-200 divide-y text-sm">
          {notice.next && (
            <div className="py-3 flex gap-5">
              <span className="text-neutral-400">윗글</span>
              <Link
                href={`/brand/notice/${notice.next.id}`}
                className="hover:underline"
              >
                {notice.next.title}
              </Link>
            </div>
          )}
          {notice.prev && (
            <div className="py-3 flex gap-5">
              <span className="text-neutral-400">아랫글</span>
              <Link
                href={`/brand/notice/${notice.prev.id}`}
                className="hover:underline"
              >
                {notice.prev.title}
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-8">
          <Link href="/brand/notice">
            {/* <button className="px-6 py-2 bg-[#505e54] text-white rounded-sm hover:bg-neutral-700 cursor-pointer"> */}
            <button className="px-10 py-2 text-black rounded-sm border-1 border-black-700 transition-all duration-400 hover:bg-neutral-700 hover:text-white cursor-pointer">
              목록
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeDetail;
