 
import { Dispatch, SetStateAction, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Modal from '@/libs/litebox-lib/ui/Modal/Modal'
import Input from '@/libs/litebox-lib/ui/Input/Input';
import IMGCloseButton from '@/public/imgs/faqs/closeButton.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import ImageWrapper from '@/components/common/ImageWrapper';

export default function FaqsModal({isModalOpen, setIsModalOpen} : {isModalOpen:boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>>}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { register, formState: {errors}, handleSubmit } = useForm({
        mode: "onBlur"
    });
    const [isSending, setIsSending] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const onSubmit = () => {
        if(Object.keys(errors).length == 0){
            setIsSending(true);
            const timeout = setTimeout(() => {
                setIsSending(false);
                setShowResult(true);
                clearTimeout(timeout);
            }, 1000);
        }
    }

    const inputStyle = 'w-full h-[6.4rem] font-host-grotesk text-[1.6rem] border-2 border-black focus:border-orange'
    const errorStyle = 'text-[1.2rem] text-red-500 font-host-grotesk mt-[0.8rem]'

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className='flex flex-col w-[68rem] px-[6.4rem] pb-[1.4rem] justify-between border-black border-2 bg-sand relative'>
                <button className='absolute top-[3.2rem] right-[3.2rem]' type='button' onClick={() => setIsModalOpen(false)} aria-label='Close modal'>
                    <div className='w-[3.2rem] h-[3.2rem]'>
                        <ImageWrapper style={{height: '100%'}} src={IMGCloseButton.src} alt="Close Button" />
                    </div>
                </button>
                {!showResult && <>
                    <form onSubmit={handleSubmit(onSubmit)} className={`faqsModal relative flex flex-col items-center ${isSending ? 'bg-transparent opacity-50 pointer-events-none' : ''}`}>
                        <div className='flex flex-col gap-[2.4rem] py-[4.8rem] items-center justify-center w-full'>
                            <p className='text-[4.8rem] font-black uppercase'>Contact us</p>
                            <div className='flex flex-col w-full relative'>
                                <Input 
                                    label="First Name"
                                    variant="outlined"
                                    placeholder='First Name'
                                    className={`${inputStyle} ${errors.firstName ? 'border-red-600' : ''}`}
                                    {...register("firstName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.firstName?.type === 'required' &&  <div className={errorStyle}>First Name is required</div>}
                                {errors.firstName?.type === 'pattern' &&  <div className={errorStyle}>First Name format invalid</div>}
                                {errors.firstName?.message && <div className={errorStyle}>{errors.firstName?.message.toString()}</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder='Last Name'
                                    className={`${inputStyle} ${errors.lastName ? 'border-red-600' : ''}`}
                                    {...register("lastName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.lastName?.type === 'required' &&  <div className={errorStyle}>Last Name is required</div>}
                                {errors.lastName?.type === 'pattern' &&  <div className={errorStyle}>Last Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Company Name"
                                    variant="outlined"
                                    placeholder='Company Name'
                                    className={`${inputStyle} ${errors.companyName ? 'border-red-600' : ''}`}
                                    {...register("companyName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.companyName?.type === 'required' &&  <div className={errorStyle}>Company Name is required</div>}
                                {errors.companyName?.type === 'pattern' &&  <div className={errorStyle}>Company Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Email"
                                    variant="outlined"
                                    placeholder='Email'
                                    className={`${inputStyle} ${errors.email ? 'border-red-600' : ''}`}
                                    {...register("email", { required: true, maxLength: {
                                        value: 40,
                                        message: "Too many characters, 40 chars limit"
                                    }, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                {errors.email?.type === 'required' &&  <div className={errorStyle}>Email is required</div>}
                                {errors.email?.type === 'pattern' &&  <div className={errorStyle}>Email format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Message"
                                    variant="outlined"
                                    placeholder='Message'
                                    className={`${inputStyle} ${errors.message ? 'border-red-600' : ''}`}
                                    {...register("message", { required: true })}
                                />
                                {errors.message?.type === 'required' &&  <div className={errorStyle}>Message is required</div>}
                                {errors.message?.type === 'pattern' &&  <div className={errorStyle}>Too many characters, 500 chars limit</div>}
                            </div>
                        </div>
                        <Button className='flex mb-[2.8rem]' content='Send' onClick={() => {
                            inputRef.current?.click();
                        }} />
                        <input ref={inputRef} id='submit-contact-us' type='submit' className='hidden'/>
                    </form>
                </>}
                {showResult && <>
                    <div className='flex flex-col gap-[2.4rem] py-[4.8rem] items-center justify-center w-full'>
                        <p className='text-[4.8rem] font-black uppercase'>Thanks!</p>
                        <p className='text-[2.4rem] font-host-grotesk text-center font-normal leading-[2.6rem]'>The form was<br/>successfully submitted.</p>
                        <Button content='Ok' onClick={() => setIsModalOpen(false)} />
                    </div>
                </>}
            </div>
        </Modal>
    )
}