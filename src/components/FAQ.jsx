import { useState } from "react";

import { FAQS } from "../FAQS.js";

import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(Array(FAQS.length).fill(false));

  function handleClick (index) {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };


  return FAQS.map((faq, index) => {
    return (
      <li key={index}>
        <div onClick={()=>handleClick(index)} className="flex justify-between gap-9 items-center my-5 hover:text-fuchsia-700 hover:cursor-pointer hover:transition">
          <h2 className="font-bold text-lg">{faq.question}</h2>
          <button>
            <img src={isOpen[index] ? minusIcon :  plusIcon} className="w-9 h-9" alt="" />
          </button>
        </div>

        {isOpen[index] && <p className="text-lightPurple">{faq.answer}</p>}
      </li>
    );
  });
};

export default FAQ;
