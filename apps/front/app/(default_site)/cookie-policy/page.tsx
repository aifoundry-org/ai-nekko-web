'use client'

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Page() {
    useGSAP(() => {
        gsap.set('body', {overflowY: 'scroll'})
    })

    return (
        <div className='flex flex-col h-[620rem]'>
            <div className='w-full h-[25rem]' />
            <iframe className='pb-[10rem] h-full flex mx-auto
                w-[22.8rem] sm:w-[32.8rem] md:w-[52.8rem] lg:w-[72.8rem] xl:w-[72.8rem] 2xl:w-[72.8rem]
            ' src="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=5b97934e-1d8b-4bf5-bc64-66cec36b66a7" />
        </div>
    )
}