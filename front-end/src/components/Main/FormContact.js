import React from 'react'

const FormContact = ({inputType, placeholderText, name, labelName, inputValue, setInputValue}) => {
  return (
    <div className='w-full flex flex-col flex-start gap-y-3'>
        <label className='text-gray-600'>{labelName}</label>
        <input 
            type={inputType} 
            className='py-3 form-input w-full placeholder:text-sm focus:ring-0 focus:border-gray-600 focus:border-2 transition rounded'
            placeholder={placeholderText}
            name={name}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            required
        />
    </div>
  )
}

export default FormContact