import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import drinks from '@/data/drinks.json';
import DrinkDetail from '@/features/drinks/DrinkDetail';
import { DrinkDetailTypes } from '@/features/drinks/types';

export default function DrinkPage({ drink }: { drink: DrinkDetailTypes }) {
  const { isFallback } = useRouter();
  if (isFallback) return <p>페이지 로딩 중</p>;
  return <DrinkDetail {...drink} />;
}

// 미리 생성X 요청 들어오면 페이지 생성
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // 미리 생성할 경로 없음: ID가 매번 달라지니까
    fallback: 'blocking', // 요청 오면 서버에서 만들고 캐시 -> .next 에 저장됨
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 보통 여기서  data fetch
  // const res = await fetch("https://api.github.com/repos/vercel/next.js")
  // const repo = await res.json()
  // return { props: {repo}}
  const code = params!.id as string;
  const drink = drinks.find(d => d.id === code) || null;

  if (!drink) {
    return { notFound: true };
  }

  return {
    props: { drink },
    revalidate: 60, // ISR용: 60초 후 백그라운드에서 새로 생성
    notFound: false, // true 일 경우  404 페이지로
    // redirect: {destination: '/login', permanent: false} 리다이렉트
  };
};
