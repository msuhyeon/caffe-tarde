import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import drinks from '@/data/drinks.json';
import DrinkDetail from '@/features/drinks/DrinkDetail';

type Nutrition = {
  calories: number;
  fat: number;
  protein: number;
  sodium: number;
  sugar: number;
  caffeine: number;
};

interface Drink {
  name: string;
  englishName: string;
  description: string;
  volume: string;
  imageSrc: string;
  imageAlt: string;
  nutrition: Nutrition;
  allergens: string[];
}

export default function DrinkPage({ drink }: { drink: Drink }) {
  const { isFallback } = useRouter();
  if (isFallback) return <p>페이지 로딩 중</p>;
  return <DrinkDetail {...drink} />;
}

// 미리 생성X 요청 들어오면 페이지 생성
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const code = params!.id as string;
  const drink = drinks.find(d => d.id === code) || null;

  if (!drink) {
    return { notFound: true };
  }

  return {
    props: { drink },
    revalidate: 60,
  };
};
