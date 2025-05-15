import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MainBottom = () => {
  const news = [
    {
      title: "[뉴스] 따르데커피 제로칼로리 에이드 2종 출시",
      date: "2025.05.01",
    },
    {
      title: "[뉴스] 따르데커피 구독서비스 올라 멤버스 오픈",
      date: "2025.04.11",
    },
    {
      title: "[공지] 환경 보호를 위한 약속, 매월 20일은 빨대 없는 날",
      date: "2025.01.05",
    },
    {
      title: "[뉴스] 따르데 올라 멤버스 앱 픽업 주문 반값 이벤트",
      date: "2024.12.12",
    },
    {
      title: "[뉴스] 따르데 올라 멤버십 정책 변경 안내",
      date: "2024.08.10",
    },
  ];
  return (
    <section className="flex justify-between gap-3 mb-10">
      <div className="overflow-hidden flex-1">
        <div
          className="cursor-pointer text-white h-[300px] p-10 
                      bg-[url('/images/main_bottom_bg_01.jpg')] 
                      bg-cover bg-center 
                      bg-zinc-500/80 
                      bg-blend-multiply
                      transform
                      transition
                      duration-200
                      ease-out
                      hover:scale-105"
        >
          <h3
            className="text-xl font-semibold after:content-[''] 
                        after:block 
                        after:w-[42px] 
                        after:h-[1px] 
                        after:bg-white 
                        after:mt-[13px]"
          >
            가맹점 창업 안내
          </h3>
          <p className="mt-[15px]">따르데 프랜차이즈 파트너로 함께하세요.</p>
        </div>
      </div>
      <div className="overflow-hidden flex-1">
        <div
          className="cursor-pointer text-white h-[300px] p-10 
                      bg-[url('/images/main_bottom_bg_02.jpg')] 
                      bg-cover bg-center 
                      bg-zinc-500/80 
                      bg-blend-multiply
                      transform
                      transition
                      duration-200
                      ease-out
                      hover:scale-105"
        >
          <h3
            className="text-xl font-semibold after:content-[''] 
                        after:block 
                        after:w-[42px] 
                        after:h-[1px] 
                        after:bg-white 
                        after:mt-[13px]"
          >
            매장 찾기
          </h3>
          <p className="mt-[15px]">가까운 따르데 매장을 확인해보세요.</p>
        </div>
      </div>
      <div className="flex-2 px-5 py-3">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">NEWS</h3>
          <Link href="#" className="text-sm text-neutral-600">
            show more
            <ChevronRight className="pl-2 inline-block" />
          </Link>
        </div>
        <ul className="mt-5 cursor-pointer">
          {news.map((item, index) => (
            <li
              className="text-neutral-500 pb-2 text-sm flex justify-between"
              key={index}
            >
              <p className="hover:text-black ">{item.title}</p>
              <span>{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainBottom;
