import type { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import EventDetail from '@/features/event/EventDetail';
import { noticeData } from '@/data/notices';
import { EventType } from '@/shared/types/event';

export default function EventPage({ event }: { notice: EventType }) {
  const { isFallback } = useRouter();
  if (isFallback) return <p>페이지 로딩 중...</p>;

  return <EventDetail {...event} />;
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
