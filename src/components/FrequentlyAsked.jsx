import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqItems } from "../datas/faqs";

const FrequentlyAsked = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

 

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-red-200 mt-12 py-4 ">
      <div className="max-w-6xl mx-auto py-12 text-center">
        <h6 className="uppercase text-base md:text-md text-blue-700">Frequently Asked Questions</h6>
        <h4 className="text-xl mt-2 font-bold mb-12">Get Answers to Most Questions About Us</h4>

        <section className="px-3">
          {faqItems.map((item, index) => (
            <article key={index} className="bg-white w-full px-6 py-3 mb-2">
              <div className="flex items-center justify-between text-md">
                <p>{item.question}</p>
                <button onClick={() => handleToggle(index)}>
                  {expandedIndex === index ? (
                    <FaMinus className="text-sm mt-1" />
                  ) : (
                    <FaPlus className="text-sm mt-1" />
                  )}
                </button>
              </div>
              {expandedIndex === index && (
                <div className="border-2 rounded-lg mt-3">
                  <p className="text-justify p-4">{item.answer}</p>
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default FrequentlyAsked;