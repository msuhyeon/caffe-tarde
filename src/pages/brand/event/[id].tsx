import type { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import EventDetail from '@/features/event/EventDetail';
import { eventData } from '@/data/event';
import { EventType } from '@/shared/types/event';

export default function EventPage({ event }: { event: EventType }) {
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
  const event = eventData.find(item => item.id === code);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: { event },
    revalidate: 60,
  };
};
