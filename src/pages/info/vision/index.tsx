import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';

const Vision = () => {
  return (
    <section className="w-full lg:mt-10">
      <Breadcrumb>
        <BreadcrumbList className="justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>비전</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-16">
        <h2 className="lg:text-5xl text-4xl font-extrabold expanded text-black-500 mb-15 text-center">
          TARDE COFFEE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div className="bg-[#f8f8f8] p-6 rounded-xl text-center">
            <h3 className="text-sm text-rose-700 font-bold mb-2">MISSION</h3>
            <p className="text-lg font-semibold">
              커피 한 잔으로 일상에 여유와 위로를 전합니다
            </p>
          </div>
          <div className="bg-[#f8f8f8] p-6 rounded-xl text-center">
            <h3 className="text-sm text-rose-700 font-bold mb-2">VISION</h3>
            <p className="text-lg font-semibold">
              당신의 오후를 따뜻하게 만드는 라이프스타일 브랜드
            </p>
          </div>
        </div>
      </div>
      <div className="bg-rose-50 py-16 text-center mb-16 rounded-xl shadow">
        <h4 className="text-sm font-medium text-rose-700 mb-2">중장기 비전</h4>
        <p className="lg:text-3xl text-2xl font-bold text-rose-800">
          Better Afternoon, Better Life
        </p>
        <p className="text-neutral-500 mt-2">
          지속 가능한 따뜻한 오후의 문화를 만들어갑니다
        </p>
      </div>
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">핵심가치</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl shadow-sm">
            <div className="text-3xl mb-2">🤝</div>
            <p className="font-semibold">고객 중심</p>
            <p className="text-sm text-neutral-500">
              늘 고객의 일상 속에 머무는 브랜드
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <div className="text-3xl mb-2">🧠</div>
            <p className="font-semibold">정직한 품질</p>
            <p className="text-sm text-neutral-500">
              원두부터 베이커리까지 신선하게
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <div className="text-3xl mb-2">🌏</div>
            <p className="font-semibold">지속가능성</p>
            <p className="text-sm text-neutral-500">환경과 함께하는 브랜드</p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">행동규범</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <div>
            <div className="text-2xl mb-1">😊</div>
            <p className="text-sm font-medium">따뜻한 인사</p>
          </div>
          <div>
            <div className="text-2xl mb-1">🍞</div>
            <p className="text-sm font-medium">신선한 재료</p>
          </div>
          <div>
            <div className="text-2xl mb-1">☕</div>
            <p className="text-sm font-medium">한 잔의 정성</p>
          </div>
          <div>
            <div className="text-2xl mb-1">🧹</div>
            <p className="text-sm font-medium">청결한 환경</p>
          </div>
          <div>
            <div className="text-2xl mb-1">👂</div>
            <p className="text-sm font-medium">고객의 소리</p>
          </div>
          <div>
            <div className="text-2xl mb-1">👣</div>
            <p className="text-sm font-medium">지속 가능한 실천</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
