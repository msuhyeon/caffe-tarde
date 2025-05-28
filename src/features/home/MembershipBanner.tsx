import Link from 'next/link';

const MembershipBanner = () => {
  return (
    <section className="bg-[#f5f5f5] lg:py-10 py-7 my-10 rounded-xl mx-auto text-center">
      <h3 className="lg:text-2xl text-xl font-bold mb-3">
        TARDE 멤버십 "올라" 혜택
      </h3>
      <p className="text-neutral-600 mb-5">
        매일 커피 한 잔, 더 똑똑하게 즐기세요!
      </p>
      <ul className="flex flex-col sm:flex-row justify-center lg:gap-6 gap-3 text-sm text-neutral-800 mb-6">
        <li>무료 음료 쿠폰</li>
        <li>포인트 적립 및 전용 이벤트</li>
        <li>🎁 생일 축하 쿠폰</li>
      </ul>
      <Link
        className="px-6 py-2 border border-neutral-500 rounded hover:bg-[#505e54] hover:text-white transition cursor-pointer"
        href="/membership"
      >
        멤버십 자세히 보기
      </Link>
    </section>
  );
};

export default MembershipBanner;
