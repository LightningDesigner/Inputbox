import React, { useState } from 'react';


const TextFieldWithLimit = () => {
const [inputValue, setInputValue] = useState('');
const [isError, setIsError] = useState(false);
const [shake, setShake] = useState(false);


  const handleChange = (e) => {
    const newText = e.target.value
    if (newText.length <= 12) {
      setInputValue(newText);
      setIsError(false);
    } else {
      setIsError(true);
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  };


  console.log("Is error state:", isError);


  return (
    <div>
      <input
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        className={`form-input block w-[358px] h-[40px] px-[10px] py-[12px] bg-white border
        ${isError ? 'custom-shadow-error' : inputValue.length ? 'custom-shadow-active' : ''}
        ${shake ? 'custom-shake' : ''}
        rounded-[6px] placeholder-gray-400 focus:outline-none`} 
        placeholder="Input here"
        style={{ fontSize: '14px', opacity: isError || inputValue ? '100%' : '90%' }}/>
      
        {isError && (
           <div className="mt-[6px] flex items-start align item-center text-red-600">
           <p className="font-[530] opacity-100 text-[13px]">
             Max 12 characters
           </p>
         </div> 
          )}
    </div>
  );
};

export default TextFieldWithLimit;

