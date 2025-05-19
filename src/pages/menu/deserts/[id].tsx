import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import menu from '@/data/menu.json';
import DesertDetail from '@/features/menu/deserts/Detail';
import { DetailTypes } from '@/shared/types/menuItem';

export default function DrinkPage({ desert }: { desert: DetailTypes }) {
  const { isFallback } = useRouter();
  if (isFallback) return <p>페이지 로딩 중</p>;
  return <DesertDetail {...desert} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const code = params!.id as string;
  const deserts = menu.filter(item => item.category === 'deserts');
  const desert = deserts.find(d => d.id === code) || null;

  if (!desert) {
    return { notFound: true };
  }

  return {
    props: { desert },
    revalidate: 60,
    notFound: false,
  };
};
