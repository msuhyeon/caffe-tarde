import { useRouter } from 'next/router';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const isMainPage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main
        className={`flex-1 ${
          isMainPage
            ? 'pt-0'
            : `pt-[100px] pb-10 mx-auto 
                w-full max-w-screen-md sm:max-w-screen-lg lg:max-w-[800px] xl:max-w-[1024px] 
                px-4 sm:px-6 lg:px-8
              `
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
