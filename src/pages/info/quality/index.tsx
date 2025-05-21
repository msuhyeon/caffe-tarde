import Image from 'next/image';

const Quality = () => {
  return (
    <div className="w-full mx-auto px-4 py-20">
      <section className="text-center mb-20">
        <h1 className="text-3xl font-bold text-[#505e54] mb-4">
          우리가 지키는 품질
        </h1>
        <p className="text-base text-[#505e54]">
          따르데는 ‘정직한 한 잔’을 위해 원두에서 베이커리까지
          <br />
          모든 순간에 책임을 다합니다.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-16">
        <Image
          className="w-full h-[240px] object-cover rounded-lg"
          src="/images/coffee_tree.png"
          width="400"
          height="400"
          alt="커피나무"
        />
        <div>
          <h3 className="text-xl font-bold text-rose-700 mb-2">
            좋은 커피는, 좋은 산지에서
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            따르데는 중남미, 아프리카 등지의 인증된 산지에서 직접 선별한
            원두만을 사용합니다.
            <br />
            생산자와의 지속 가능한 관계를 유지하며, 품질과 윤리를 함께
            지켜갑니다.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-16">
        <div className="order-2 sm:order-1">
          <h3 className="text-xl font-bold text-[#505e54] mb-2">
            정직한 거래, 투명한 공급
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            단순히 가격이 아닌, 품질과 윤리를 기준으로 한 거래를 원칙으로
            합니다.
            <br />
            따르데는 공정무역 인증 파트너들과 협력해 고객에게 신뢰를 전합니다.
          </p>
        </div>
        <img
          src="/images/fair_trade.jpeg"
          alt="공정무역"
          className="w-full h-[240px] object-cover rounded-lg order-1 sm:order-2"
        />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-16">
        <Image
          className="w-full h-[240px] object-cover rounded-lg"
          src="/images/barista.png"
          alt="바리스타 추출"
          width="400"
          height="400"
        />
        <div>
          <h3 className="text-xl font-bold text-[#505e54] mb-2">
            한 잔 한 잔, 바리스타의 정성
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            모든 매장에서는 정식 교육을 이수한 바리스타가 직접 커피를
            추출합니다.
            <br />
            추출 시간, 온도, 비율까지 정밀하게 관리하며 최고의 맛을 유지합니다.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-20">
        <div className="order-2 sm:order-1">
          <h3 className="text-xl font-bold text-[#505e54] mb-2">
            당일 생산, 당일 제공
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            따르데의 베이커리는 당일 생산 원칙을 따릅니다.
            <br />
            보존료 없이, 매일 아침 구운 베이커리를 고객에게 가장 신선한 순간에
            제공합니다.
          </p>
        </div>
        <img
          src="/images/bakery.png"
          alt="베이커리"
          className="w-full h-[240px] object-cover rounded-lg order-1 sm:order-2"
        />
      </section>
      <section className="text-center">
        <blockquote className="text-[#505e54] italic text-xl font-semibold">
          “좋은 커피는 좋은 재료에서,
          <br /> 좋은 브랜드는 정직한 마음에서 시작됩니다.”
        </blockquote>
      </section>
    </div>
  );
};

export default Quality;
