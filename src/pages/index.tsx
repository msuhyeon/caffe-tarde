import MainBanner from "@/features/home/MainBanner";
import MonthlyBestMenu from "@/features/home/MonthlyBestMenu";
import CallToAction from "@/shared/components/CallToAction";

export default function Home() {
  return (
    <main className="flex-grow">
      <MainBanner />
      <div className="container mx-auto px-30 sm:px-10 lg:px-50">
        <MonthlyBestMenu />
      </div>
      <CallToAction />
    </main>
  );
}
