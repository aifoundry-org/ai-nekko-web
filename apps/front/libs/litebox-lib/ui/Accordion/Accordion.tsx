'use client';

import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import IMGChevron from '@/public/imgs/faqs/chevron.webp'
import ImageWrapper from '@/components/common/ImageWrapper';

interface AccordionProps {
  title: React.ReactNode;
  content: string;
  isOpen?: boolean;
  isDesktop?: boolean;
  className?: string;
}

/**
 * The `Accordion` component has two style variants (outlined or filled). Also it must be defined with an specific id, a title and its content. And It also integrates customization using Tailwind CSS by the className property.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Accordion-1-0-0-1ad701bba51e4a9fb0b4cf11fb49bcb9
 *
 * @param title - The title element that will be always displayed at the top of the accordion.
 * @param content - The content that will be displayed when the accordion is open.
 * @param isOpen - Determine whether the accordion is opened or not
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 */
const Accordion = ({ title, isOpen = false, content, className }: AccordionProps) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className={cn('flex flex-col border-t-[2px] cursor-pointer border-black', className)}>
      <div className='flex flex-row items-center cursor-pointer justify-between' onClick={() => setOpen(!open)}>
        <h2 className='font-host-grotesk pl-0 pr-[2vw] font-bold cursor-pointer normal-case 
          py-[1.6rem] sm:py-[2.4rem] md:py-[2.4rem] lg:py-[2.4rem] xl:py-[2.4rem] 2xl:py-[2.4rem]
          text-[1.8rem] sm:text-[2.4rem] md:text-[2.4rem] lg:text-[2.4rem] xl:text-[2.4rem] 2xl:text-[4.4rem]
        '>
          {title}
        </h2>
        <div className='
        min-w-[2.4rem] sm:min-w-[2.4rem] md:min-w-[2.4rem] lg:min-w-[2.4rem] xl:min-w-[2.4rem] 2xl:min-w-[4rem]
        '>
          <ImageWrapper style={{height: '100%'}} src={IMGChevron.src} className={`transform transition-transform duration-200 ${open && 'rotate-180'} pointer-events-none`} alt='Chevron' />
        </div>
      </div>
     <div
        className={cn(
          `max-h-0 transition-all duration-500 ${open && 'max-h-screen'}
           overflow-y-scroll sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-y-hidden xl:overflow-y-hidden 2xl:overflow-y-hidden  
          `
        )}>
        <h3 className='font-normal font-host-grotesk normal-case
          text-[1.4rem] sm:text-[1.6rem] md:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-[4rem] 
          pb-[1.6rem] sm:pb-[2.4rem] md:pb-[2.4rem] lg:pb-[2.4rem] xl:pb-[2.4rem] 2xl:pb-[2.4rem]
        ' dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
