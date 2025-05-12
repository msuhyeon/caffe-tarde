import MainBanner from "@/features/home/MainBanner";
import MonthlyBestMenu from "@/features/home/MonthlyBestMenu";

export default function Home() {
  return (
    <main className="flex-grow">
      <MainBanner />
      <MonthlyBestMenu />
    </main>
  );
}
