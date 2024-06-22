'use client'

import { useState } from 'react';

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordionItem ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
      <div className="question">
        {question}
      </div>
      <div className={`answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>

      <style jsx>{`
        .accordionItem {
          border-bottom: 2px solid #ddd;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .accordionItem:hover {
          background-color: #f0f0f0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        .question {
          padding: 15px;
          background-color: #f7f7f7;
          font-weight: bold;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 15px;
          background-color: #fff;
          border-radius: 0 0 5px 5px;
        }
        .answer.open {
          max-height: 200px; /* Adjust this value based on content length */
          padding: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

type AccordionProps = {
  data: { question: string; answer: string }[];
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <div className="container">
      <h1 className="heading">FAQ</h1>
      <div className="accordion">
        {data.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        .heading {
          font-size: 2.5em;
          margin-bottom: 20px;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          display: inline-block;
          border-radius: 5px;
          transition:0.5 ;
        }
          .heading:hover{
          box-shadow: 0 4px 8px rgba(0, 0, 0.5, 0.25);
          transform: scale(1.1)

          }
        .accordion {
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Accordion;
