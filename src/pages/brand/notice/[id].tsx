import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import NoticeDetail from '@/features/notice/Detail';
import { useRouter } from 'next/router';
import { NoticeDetailType } from '@/shared/types/notice';
import { notFound } from 'next/navigation';

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

export const getStaticProps = ({ notice }) => {
  return {
    props: notice,
    revalidate: 60,
    notFound: false,
  };
};
