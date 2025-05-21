import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/shared/components/ui/accordion';
import { faqData } from '@/data/faq';

const FAQSection = () => {
  return (
    <section className="mt-10">
      <div className="w-[800px] mx-auto">
        <h2 className="text-xl font-bold mb-3">자주 묻는 질문</h2>
        <h3 className="text-sm text-neutral-500">
          고객님들께서 많이 묻는 질문들을 확인 해 보세요
        </h3>
        <Accordion type="single" collapsible className="space-y-4 mt-7">
          {faqData.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border-b pb-2"
            >
              <AccordionTrigger className="text-left">
                [{faq.category}] {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-700">
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
