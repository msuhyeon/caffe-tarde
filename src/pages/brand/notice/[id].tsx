import type { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import NoticeDetail from '@/features/notice/Detail';
import { noticeData } from '@/data/notices';
import type { NoticeDataType } from '@/shared/types/notice';

export default function NoticePage({ notice }: { notice: NoticeDataType }) {
  const { isFallback } = useRouter();

  if (isFallback) return <p>페이지 로딩 중...</p>;

  return <NoticeDetail {...notice} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const code = params?.id as string;
  const index = noticeData.findIndex(item => item.id === code);

  if (index === -1) {
    return { notFound: true };
  }

  const notice = {
    prev: noticeData[index - 1] ?? null,
    current: noticeData[index],
    next: noticeData[index + 1] ?? null,
  };

  return {
    props: { notice },
    revalidate: 60,
  };
};
