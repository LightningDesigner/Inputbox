import React, { useState } from 'react';


const TextFieldWithLimit = () => {
  const [inputValue, setInputValue] = useState('');
  const isError = inputValue.length >12;


  const handleChange = (e) => {
    const newText = e.target.value
    if (newText.length <= 12) {
      setInputValue(newText);
    }
  };

  return (
    <div>
      <input
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        className={`form-input block w-[358px] h-[40px] px-[10px] py-[10px] bg-white border
        ${isError ? 'custom-shadow-error' : inputValue.length ? 'custom-shadow-active' : ''}
        rounded-[6px] placeholder-gray-400 focus:outline-none`} 
        placeholder="Input here"
        style={{ fontSize: '14px', opacity: isError || inputValue ? '100%' : '90%' }}/>
      
        {isError && (
          <p className="text-error-border text-xs mt-1.5" style={{ fontSize: '12px' }}>
          Max 32 characters
          </p>
      )}
    </div>
  );
};

export default TextFieldWithLimit;

