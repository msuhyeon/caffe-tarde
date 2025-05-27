import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/shared/components/ui/accordion';
import { faqData } from '@/data/faq';

const FAQSection = () => {
  return (
    <section className="w-full px-5 lg:mt-10">
      <div
        className="w-full mx-auto 
                    lg:min-w-[800px] lg:max-w-[1200px] 
                    md:min-w-[280px] md:max-w-[800px]
                  "
      >
        <h2 className="lg:text-2xl text-xl font-bold mb-3">자주 묻는 질문</h2>
        <h3 className="lg:text-md text-sm text-neutral-500">
          고객님들께서 많이 묻는 질문들을 확인 해 보세요
        </h3>

        <Accordion type="single" collapsible className="space-y-4 mt-7 w-full">
          {faqData.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border-b pb-2 w-full"
            >
              <AccordionTrigger className="text-left w-full">
                [{faq.category}] {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-700 w-full">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
