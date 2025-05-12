// import { Card, CardContent } from "@/shared/components/ui/card";

import CustomCarousel from "@/shared/components/CustomCarousel";

export default function Home() {
  return (
    <main className="flex-grow">
      <CustomCarousel />
      <h1 className="text-2xl font-bold">
        카페 따르데에 오신 걸 환영합니다 ☕
      </h1>
      <p>메뉴를 둘러보세요</p>
    </main>
  );
}
