import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does your digital transformation service include?",
      answer: "A: Complete modernization of financial systems, cloud integration, and automated workflows tailored to your business."
    },
    {
      question: "How does CFO consulting work?",
      answer: "A: Strategic financial planning, reporting optimization, and executive guidance on key financial decisions."
    },
    {
      question: "What's included in audit readiness services?",
      answer: "A: Comprehensive review of financial controls, documentation preparation, and compliance verification."
    },
    {
      question: "Do you offer customized service packages?",
      answer: ": Yes, we tailor solutions based on business size and needs with flexible pricing options."
    },
    {
      question: "What's your minimum engagement period?",
      answer: "A: Varies by service - typically 3 months for consulting and 6 months for transformation projects."
    },
    {
      question: "How do I get started?",
      answer: " Schedule a free consultation to assess your needs and receive a customized proposal."
    },
    {
      question: "Do you work with small businesses?",
      answer: " Yes, we serve businesses of all sizes with scalable solutions and pricing."
    },
    {
      question: " What industries do you specialize in?",
      answer: "Experience across finance, technology, healthcare, retail, and manufacturing sectors."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-4xl font-bold mb-8">Frequently asked questions</h2>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full py-4 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="pb-4 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;