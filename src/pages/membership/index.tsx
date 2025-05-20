import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/components/ui/tabs';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/components/ui/breadcrumb';

const MemberShip = () => {
  return (
    <section className="mt-10">
      <Breadcrumb>
        <BreadcrumbList className="justify-end">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>멤버십</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="membership" className="w-[800px] mt-6">
        <TabsList className="w-full h-[50px] bg-[#f5f5f5]">
          <TabsTrigger value="membership" className="cursor-pointer">
            멤버십 안내
          </TabsTrigger>
          <TabsTrigger value="benefits" className="cursor-pointer">
            등급 및 혜택 안내
          </TabsTrigger>
        </TabsList>
        <TabsContent value="membership" className="w-full py-5 px-8">
          <h2 className="text-2xl font-bold mb-6">멤버십 안내</h2>
          <div className="bg-[#fff8f8] border border-rose-100 rounded-xl p-5 mb-8 shadow-sm">
            <p className="text-lg font-semibold mb-1">
              지금, 올라 멤버십을 만나보세요 💃
            </p>
            <p className="text-sm text-neutral-700">
              가입만 해도 포인트 적립! <br />
              고객님의 등급에 따라 더 많은 혜택을 누릴 수 있어요.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-3">🌱 가입 방법</h3>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc list-inside">
              <li>회원가입 시 자동으로 올라 멤버십 등록</li>
              <li>첫 구매 시부터 포인트 적립 시작</li>
            </ul>
          </div>
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-3">💎 포인트 적립 안내</h3>
            <p className="text-sm text-neutral-700 mb-1">
              포인트는 구매 금액에 따라 적립되며, 등급에 따라 적립률이
              달라집니다.
            </p>
            <p className="text-sm text-neutral-700">
              적립일 기준{' '}
              <span className="font-semibold text-rose-700">1년</span> 동안
              유효하며, 이후 자동 소멸됩니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">📈 등급 운영 안내</h3>
            <ul className="text-sm list-disc list-inside text-neutral-700">
              <li>
                등급은 <strong>우노 → 도스 → 뜨레스</strong> 순으로 승급됩니다.
              </li>
              <li>적립 실적 기준 자동 승급, 승급 후 1년간 유지됩니다.</li>
              <li>기준 미달 시 자동 하향 조정될 수 있습니다.</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="benefits" className="w-full py-5 px-8">
          <h2 className="text-2xl font-bold mb-6">등급 및 혜택 안내</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <li className="rounded-xl border border-yellow-700 p-6 text-center shadow-sm">
              <div className="mb-2">
                <p className="text-lg font-bold text-yellow-700">우노</p>
                <p className="text-neutral-500 text-sm">UNO</p>
              </div>
              <p>신규 회원 자동 부여</p>
              <p className="mt-2 font-medium text-yellow-700">
                구매 금액의 3% 적립
              </p>
            </li>
            <li className="rounded-xl border border-zinc-500 p-6 text-center shadow-sm">
              <div className="mb-2">
                <p className="text-lg font-bold text-zinc-500">도스</p>
                <p className="text-neutral-500 text-sm">DOS</p>
              </div>
              <p>최근 1년 포인트 2,000점 이상</p>
              <p className="mt-2 font-medium text-zinc-500">
                구매 금액의 4% 적립
              </p>
            </li>
            <li className="rounded-xl border border-amber-500 p-6 text-center shadow-sm">
              <div className="mb-2">
                <p className="text-lg font-bold text-amber-500">뜨레스</p>
                <p className="text-neutral-500 text-sm">TRES</p>
              </div>
              <p>최근 1년 포인트 7,000점 이상</p>
              <p className="mt-2 font-medium text-amber-500">
                구매 금액의 5% 적립
              </p>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">등급 유의사항</h3>
            <ul className="list-disc list-inside text-sm text-neutral-700">
              <li>포인트는 적립일 기준 1년 후 자동 소멸됩니다.</li>
              <li>승급 기준 충족 시 익일부터 등급이 적용됩니다.</li>
              <li>등급은 승급일로부터 1년간 유지됩니다.</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MemberShip;
