'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isError, setIsError] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setEmail(inputValue)
    setIsError(!validateEmail(inputValue) && inputValue !== '')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setIsError(true)
    } else {
      // Handle form submission here
      console.log('Valid email submitted:', email)
      setIsError(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:flex gap-4  items-start ">
      <div className={`w-full relative flex flex-col items-center  ${isError ? 'bg-red-500' : ''} rounded-md`}>
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          className={`w-full h-12 rounded-md outline-none border-2 px-4 ${
            isError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
          }`}
        />
        
        {isError && (
          <Image
            src="/images/icon-error.svg"
            width={16}
            height={16}
            alt="icon error"
            className="object-contain absolute top-4 right-4"
          />
        )}

        {isError && (
          <div className="w-full rounded-lg mt-1">
            <p className="text-[12px] py-1 px-4 italic text-white">Whoops! Make sure it&apos;s an email</p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full mt-4 lg:mt-0 lg:w-[40%] bg-primary-soft-red border-2 border-primary-soft-red font-medium font-rubik text-white py-2 rounded-md hover:bg-white hover:text-primary-soft-red  transition-colors"
      >
        Contact Us
      </button>
    </form>
  )
}

export default EmailInput