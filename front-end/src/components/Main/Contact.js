import React, { useState } from 'react'
import FormContact from './FormContact';
import axios from "axios";

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const { 
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        REACT_APP_USER_ID 
    } = process.env;

    const handleSubmission = (event) => {
        event.preventDefault();

        const data = {
            service_id: REACT_APP_SERVICE_ID,
            template_id: REACT_APP_TEMPLATE_ID,
            user_id: REACT_APP_USER_ID ,
            template_params: {
                fullName,
                email,
                subject,
                message,
                from_name: fullName
            }
        };

        setLoading(true);
        
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then(data => {            
            if(!data) {
                setMessageSent(false);
                throw Error('Could not send email')
            }

            setFullName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setLoading(false);

            setMessageSent(true);
        })
        .catch(err => console.log(err))
    }


  return (
    <div data-aos="fade-up" id="contact" className='relative bg-progress bg-no-repeat bg-fixed bg-center bg-cover container mx-auto py-10 font-[poppins]'>
        <div className='px-2 md:px-3 flex flex-col gap-y-2'>

            <div className='text-center md:text-start flex flex-col gap-y-2'>
                <h2 className='tracking-wider text-blue-700 font-[600] font-[georgia] text-2xl md:text-4xl uppercase'>Get In Touch</h2>
                <h4 className='text-sm md:text-lg tracking-wider text-gray-600 font-[400]'>
                    Let's Talk About A Project
                </h4>
            </div>

            {loading && <div className='text-center text-4xl'>
                <h2>Sending email....</h2>
                <p className='text-2xl mt-3'>Please wait</p>
            </div>}

            {!loading && <div className='flex flex-col items-center gap-y-10'>
            {!messageSent && 
                <form 
                    className='pt-5 flex flex-col gap-y-7 items-start w-full'
                    onSubmit={handleSubmission}
                >
                    <div className='w-full flex flex-col items-start gap-y-7 md:flex-row md:justify-center md:gap-y-0 md:gap-x-4'>
                        <FormContact 
                            inputType={'text'}
                            labelName={'Full Name'}
                            placeholderText={'Enter your full name...'}
                            name={'fullName'}
                            inputValue={fullName}
                            setInputValue={setFullName}
                        />

                        <FormContact 
                            inputType={'email'}
                            labelName={'Email Address'}
                            placeholderText={'Enter your email address...'}
                            name={'email'}
                            inputValue={email}
                            setInputValue={setEmail}
                        />
                    </div>

                    <div className='w-full'>
                        <FormContact 
                            inputType={'text'}
                            labelName={'Subject'}
                            placeholderText={'Enter a subject...'}
                            name={'subject'}
                            inputValue={subject}
                            setInputValue={setSubject}
                        />
                    </div>

                    <div className='w-full flex flex-col flex-start gap-y-3'>
                        <label className='text-gray-600'>Message</label>
                        <textarea 
                            className='h-40 md:h-56 py-3 form-input w-full placeholder:text-sm focus:ring-0 focus:border-gray-600 focus:border-2 transition rounded'
                            placeholder={"Enter your message here..."}
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type='submit' className='rounded text-lg uppercase px-4 py-4 hover:bg-blue-700 bg-blue-800 text-light w-full md:w-64' disabled={loading}>send message</button>
                </form>
                }

                {messageSent &&
                    <div 
                        className='max-w-[500px] bg-black/90 text-center py-10 px-5 flex items-center justify-center'
                        onClick={() => setMessageSent(!messageSent)}
                    >
                        <div className='text-center'>
                            <p className='text-green-600 pb-6 text-xl'>Message sent successfully!!</p>
                            <button className='text-[15px] uppercase py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-light/90 transition'>Return to contact</button>
                        </div>
                    </div>
                }

                <div className='py-5 text-center flex flex-col items-center md:gap-y-0 md:flex-row md:justify-center md:items-center w-full'>
                    <p className='py-7 bg-cyan-700 text-light w-full flex flex-col items-center gap-y-3'>
                        <span className='text-xl uppercase'>Address</span>
                        <span className='italic text-light/80'>04 Rue Oued Nfiss Ancien Mellah</span>
                    </p>
                    <p className='py-7 bg-blue-700 text-light w-full flex flex-col items-center gap-y-3'>
                        <span className='text-xl uppercase'>Postal Code - City</span>
                        <span className='italic text-light/80'>11000 - Salé, Morocco</span>
                    </p>
                    <p className='py-7 bg-yellow-700 text-light w-full flex flex-col items-center gap-y-3'>
                        <span className='text-xl uppercase'>Email Address</span>
                        <span className='italic text-light/80'>devbrainy98@gmail.com</span>
                    </p>
                    <p className='py-7 bg-black text-light w-full flex flex-col items-center gap-y-3'>
                        <span className='text-xl uppercase'>Phone Number</span>
                        <span className='italic text-light/80'>(212) - 698-551516</span>
                    </p>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Contact