import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';
import Link from 'next/link';
import { noticeData } from '@/data/notices';
import { formatDate } from '@/lib/format';

const NoticeList = () => {
  const noticeList = noticeData.sort(function compare(a, b) {
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
            <BreadcrumbPage>공지사항</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-2xl font-bold mb-6">공지사항</h2>
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden lg:table-cell w-[100px] text-center">
              No
            </TableHead>
            <TableHead className="w-full">내용</TableHead>
            <TableHead className="w-[120px] text-right">게시일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {noticeList.map(notice => (
            <TableRow key={notice.id}>
              <TableCell className="hidden lg:table-cell w-[100px] text-center">
                {notice.id}
              </TableCell>
              <TableCell>
                <Link
                  href={`/brand/notice/${notice.id}`}
                  className="block w-full max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-[#505e54] hover:underline-offset-1"
                >
                  <span className="mr-2 font-medium hover:not-underline">
                    [{notice.category}]
                  </span>
                  <span className="inline">{notice.title}</span>
                </Link>
              </TableCell>
              <TableCell className="text-sm text-neutral-400 text-right">
                {formatDate(notice.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default NoticeList;
