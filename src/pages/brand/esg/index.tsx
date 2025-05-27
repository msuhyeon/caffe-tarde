import { WandSparkles } from 'lucide-react';

const Esg = () => {
  return (
    <section className="mt-10 w-[800px] flex justify-center items-center opacity-0 translate-y-4 animate-fade-down">
      <p className="font-semibold text-3xl transition-all duration-700 ease-out">
        페이지 작업 중 입니다
      </p>
      <WandSparkles className="" />
    </section>
  );
};

export default Esg;
