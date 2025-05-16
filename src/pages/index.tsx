import MainBanner from '@/features/home/MainBanner';
import MainBottom from '@/features/home/MainBottom';
import MembershipBanner from '@/features/home/MembershipBanner';
import MonthlyBestMenu from '@/features/home/MonthlyBestMenu';
import CallToAction from '@/shared/components/CallToAction';

export default function Home() {
  return (
    <main className="flex-grow  pt-[80px]">
      <MainBanner />
      <div className="container mx-auto px-20 sm:px-10 lg:px-30">
        <MonthlyBestMenu />
        <MembershipBanner />
        <MainBottom />
      </div>
      <CallToAction />
    </main>
  );
}
