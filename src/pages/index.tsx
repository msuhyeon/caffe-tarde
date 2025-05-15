import MainBanner from "@/features/home/MainBanner";
import MainBottom from "@/features/home/MainBottom";
import MonthlyBestMenu from "@/features/home/MonthlyBestMenu";
import CallToAction from "@/shared/components/CallToAction";

export default function Home() {
  return (
    <main className="flex-grow">
      <MainBanner />
      <div className="container mx-auto px-20 sm:px-10 lg:px-30">
        <MonthlyBestMenu />
        <MainBottom />
      </div>
      <CallToAction />
    </main>
  );
}
