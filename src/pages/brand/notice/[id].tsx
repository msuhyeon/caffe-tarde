import type { GetStaticProps, GetStaticPaths } from 'next';
import NoticeDetail from '@/features/notice/Detail';
import { useRouter } from 'next/router';
import { NoticeDetailType } from '@/shared/types/notice';
import { notFound } from 'next/navigation';
import { noticeData } from '@/data/notices';

export default function NoticePage({ notice }: { notice: NoticeDetailType }) {
  const { isFallback } = useRouter();

  if (isFallback) return <p>페이지 로딩중</p>;

  return <NoticeDetail {...notice} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const code = params!.id as string;
  const index = noticeData.findIndex(item => item.id === code) || 0;
  const notice = {
    prev: noticeData[index - 1] ?? null,
    current: noticeData[index],
    next: noticeData[index + 1] ?? null,
  };

  return {
    props: { notice },
    revalidate: 60,
    notFound: false,
  };
};
