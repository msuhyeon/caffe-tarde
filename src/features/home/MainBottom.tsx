import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { noticeData } from '@/data/notices';
import { formatDate } from '@/lib/format';

const MainBottom = () => {
  return (
    <section className="flex justify-between gap-3 mb-10 lg:flex-row flex-col">
      <div className="overflow-hidden flex-1">
        <div
          className="cursor-pointer text-white lg:h-[300px] h-[150px] lg:p-10 p-6 
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
                        after:mt-[13px]
                      "
          >
            가맹점 창업 안내
          </h3>
          <p className="mt-[15px]">따르데 프랜차이즈 파트너로 함께하세요.</p>
        </div>
      </div>
      <div className="overflow-hidden flex-1">
        <div
          className="cursor-pointer text-white lg:h-[300px] h-[150px] lg:p-10 p-6 
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
      <div className="flex-2 lg:px-5 py-3">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">새소식 & 공지</h3>
          <Link href="/brand/notice" className="text-sm text-neutral-600">
            show more
            <ChevronRight className="pl-2 inline-block" />
          </Link>
        </div>
        <ul className="mt-5 cursor-pointer">
          {noticeData.map((item, index) => (
            <li
              className="text-neutral-500 pb-2 text-sm flex justify-between items-start"
              key={index}
            >
              <Link href={`/brand/notice/${item.id}`}>
                <p className="hover:text-black">
                  [{item.category}] {item.title}
                </p>
              </Link>
              <span className="whitespace-nowrap text-right shrink-0 pl-2">
                {formatDate(item.createdAt)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainBottom;
