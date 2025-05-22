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
    <section className="mt-10">
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
      <h2 className="text-2xl font-bold mb-6">공지 사항</h2>
      <Table className="w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">No</TableHead>
            <TableHead>내용</TableHead>
            <TableHead className="text-right">날짜</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {noticeList.map(notice => (
            <TableRow key={notice.id}>
              <TableCell className="text-center">{notice.id}</TableCell>
              <TableCell>
                <Link
                  href={`/brand/notice/${notice.id}`}
                  className="text-[#505e54] hover:underline-offset-1"
                >
                  <span className="mr-2 font-medium hover:not-underline">
                    [{notice.category}]
                  </span>
                  {notice.title}
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
