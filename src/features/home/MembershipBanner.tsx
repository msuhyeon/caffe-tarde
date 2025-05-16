const MembershipBanner = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 my-10 rounded-xl max-w-[1200px] mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-3">TARDE 멤버십 "올라" 혜택</h3>
      <p className="text-neutral-600 mb-5">
        매일 커피 한 잔, 더 똑똑하게 즐기세요!
      </p>
      <ul className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-neutral-800">
        <li>무료 음료 쿠폰</li>
        <li>포인트 적립 및 전용 이벤트</li>
        <li>🎁 생일 축하 쿠폰</li>
      </ul>
      <button className="mt-6 px-6 py-2 border border-neutral-500 rounded hover:bg-neutral-100 transition cursor-pointer">
        멤버십 자세히 보기
      </button>
    </section>
  );
};

export default MembershipBanner;
