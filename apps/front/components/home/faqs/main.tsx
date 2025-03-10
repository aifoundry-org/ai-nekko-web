'use client'

import Accordion from '@/libs/litebox-lib/ui/Accordion/Accordion'

// TODO: Revert comment to code when implementing the
// message sending of the modal

// import { useState } from 'react'
// import Button from '@/libs/litebox-lib/ui/Button/Button'
// import ImageWrapper from '@/components/common/ImageWrapper'
// import IMGBanner from '@/public/imgs/faqs/banner.webp'
// import IMGBannerMobile from '@/public/imgs/faqs/bannerMobile.webp'
// import FaqsModal from './modal'

const questions = [{
    "title": "Why is today’s AI market not “open”, and why is this a problem?",
    "content": "The AI ecosystem has a gaslighting problem. The word “open” is used so pervasively that its meaning becomes confusing. Companies with proprietary walled-garden offerings call themselves open. Other companies release technology and assign “open” licenses with heavy usage limitations. Many of the AI models shared are only partially open, with no visibility into upstream data or processing.<br/><br/>This might be good enough for AI-end users looking for AI-generated results from general chatbot services. However, many companies looking to leverage AI in their operations and services for their customers want more control over their AI systems. They want to leverage their unique data as a differentiation, not give away their data to mainstream services. They seek to innovate with AI, not simply provide the same lowest common denominator available to everyone."
},{
    "title": "What should “openness” mean in AI?",
    "content": "What should “openness” mean in AI?<br/><br/>“Open” should mean that developers can quickly adapt models to their needs.  They shouldn’t have to reverse engineer models.  They shouldn’t need to make guesses to be able to fine-tune, quantize, and run models on engines such as llama.cpp.<br/><br/>“Open” should mean that people can be certain about the data used to train AI Models. They shouldn’t need to prompt AI models to guess whether personal data or copyrighted content was utilized in training.<br/><br/>“Open” should mean that AI developers know exactly what’s in their AI stack. They shouldn’t have to test against black boxes and unreliable frameworks.<br/><br/>The freedom and flexibility that open source software provides has not changed. Ainekko seeks to restore open source as an industry standard for the AI ecosystem so developers can study their technology stacks, adapt them, and redistribute them freely."
},{
    "title": "How is Ainekko trying to fix this problem?",
    "content": "We believe in and foster open source communities and practices.  It's not sufficient to compare your technology to Linux.  Companies need to release fully open source models and technologies and build developer communities around them.  Only then will we see the Linux effect.<br/><br/>Ainekko is helping create and support an open source AI technology stack. Our goal is to drive more innovation in AI by making models and enabling technology to be freely usable. Our first efforts include building an open-source composable stack from inference to hardware, and to foster an interoperable ecosystem around it called AIFoundry.org."
},{
    "title": "What is AIFoundry.org?",
    "content": "AIFoundry.org is a community initiative initially sponsored by Nekko.ai to create an open source interoperable ecosystem for AI.  It’s a home for opensource projects related to AI and engineers who want to build them collaboratively.<br/><br/>We foster discussions and collaborations between machine learning engineers and software developers.  We encourage a collaborative, transparent development process for our member projects, and clear licensing."
},{
    "title": "How can other companies get involved with AIFoundry.org?",
    "content": "We welcome other companies to participate in AIFoundry.org activities and projects, introduce their own open source projects to the AIFoundry.org ecosystem, or contribute projects. Other companies are welcome to become sponsors of AIFoundry.org."
},{
    "title": "Why is Ainekko interested in Transformers?",
    "content": "We see an opportunity to standardize the AI hardware and software stack through Transformers. Transformers are universal enough to cover a lot of use cases and simple enough to optimize hardware to optimize and accelerate them."
},{
    "title": "Is Ainekko a profit-driven company? ",
    "content": "Yes, it is. Nekko.ai is developing an end-to-end enterprise-ready stack to run various Transformer-based models that are customizable for any use case.<br/><br/>Please submit a Contact Us form to learn more or inquire about investment opportunities."
}]

export default function Faqs() {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='relative flex flex-col h-auto z-0
            justify-start sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center  
            w-[32.3rem] xs:w-[40rem] sm:w-fit md:w-fit lg:w-fit xl:w-fit 2xl:w-fit
            py-[10rem] sm:py-[5rem] md:py-[5rem] lg:py-[5rem] xl:py-[12rem] 2xl:py-[10rem] 
            mx-auto sm:mx-[6rem] md:mx-[4.2rem] lg:mx-[11.2rem] xl:mx-[11.2rem] 2xl:mx-[11.2rem] 
        '>
            <div className='font-black font-dharma-gothic-e text-[6.4rem] leading-[5.3rem] mb-[4rem] uppercase'>
                Faqs
            </div>
            {questions.map((el,idx) => (
                <Accordion isDesktop key={idx} title={el.title} content={el.content} />
            ))}
            {/* <div className='relative flex w-full mt-[4rem] border-2 border-black rounded-[4px]
                items-start sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center 
                flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
                sm:justify-between md:justify-between lg:justify-between xl:justify-between 2xl:justify-between 
                h-[27.2rem] sm:h-[13.6rem] md:h-[13.6rem] lg:h-[13.6rem] xl:h-[13.6rem] 2xl:h-[25.7rem] 
            '>
                <div className='absolute left-0 top-0 w-full h-full -z-[1]
                    hidden sm:block md:block lg:block xl:block 2xl:block
                '>
                    <ImageWrapper style={{height: '100%', objectFit: 'cover'}} src={IMGBanner.src} alt="Banner" />
                </div>
                <div className='absolute left-0 top-0 w-full h-full -z-[1]
                    block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
                '>
                    <ImageWrapper style={{height: '100%', objectFit: 'cover'}} src={IMGBannerMobile.src} alt="Banner" />
                </div>
                <div className='flex flex-col
                    pt-[4rem] sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 
                    pl-[2.4rem] xs:pl-[2rem] sm:pl-[4rem] md:pl-[4rem] lg:pl-[4rem] xl:pl-[4rem] 2xl:pl-[4rem] 
                '>
                    <p className='flex uppercase font-black 
                        text-[4.8rem] sm:text-[4.8rem] md:text-[4.8rem] lg:text-[4.8rem] xl:text-[4.8rem] 2xl:text-[8rem] 
                        leading-[4rem] sm:leading-[4rem] md:leading-[4rem] lg:leading-[4rem] xl:leading-[4rem] 2xl:leading-[8rem] 
                    '>Still have questions?</p>
                    <p className='flex font-host-grotesk font-normal 
                        text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[3rem] 
                        leading-[2.4rem] sm:leading-[2.4rem] md:leading-[2.4rem] lg:leading-[2.4rem] xl:leading-[2.4rem] 2xl:leading-[4rem] 
                        mt-[0.8rem] sm:mt-[0.8rem] md:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.8rem] 2xl:mt-[1.5rem]
                    '>We&apos;re here to help!</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className='mr-[4rem]
                    mt-[4rem] xs:mt-[8rem] sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 
                    ml-[2.4rem] xs:ml-[2rem] sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 
                ' variant='primary' content='contact us' />
            </div>
            {isModalOpen && <FaqsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />} */}
        </div>
    )
}