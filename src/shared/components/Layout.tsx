import { useRouter } from 'next/router';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const isMainPage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        className={`flex-1 ${isMainPage ? 'pt-0' : 'pt-[100px] pb-10 max-w-[1200px] mx-auto px-3'}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
