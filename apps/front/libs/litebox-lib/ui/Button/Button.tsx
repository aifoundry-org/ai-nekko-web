'use client';

import { FC, ButtonHTMLAttributes, SVGProps } from 'react';
import SVGIconPlus from '@/public/svgs/common/Plus';
import SVGIconDiscord from '@/public/svgs/common/Discord';
import SVGIconGithub from '@/public/svgs/common/Github';
import SVGIconArrowUpRight from '@/public/svgs/common/ArrowUpRight';
import SVGIconScrollArrowLeft from '@/public/svgs/common/ScrollArrowLeftMobile';
import SVGIconScrollArrowRight from '@/public/svgs/common/ScrollArrowRightMobile';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  as?: React.ElementType;
  href?: string;
  svg?: string;
  content?: string;
  noShadow?: boolean;
  target?: string;
}

const btnVariants: {[key: string]: string } = {
  primary: 'bg-orange border-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] focus:shadow-none focus:translate-x-[4px] focus:translate-y-[4px]',
  secondary: 'bg-sand border-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] focus:shadow-none focus:translate-x-[4px] focus:translate-y-[4px]',
};

const svgVariants : {[key: string]: FC<SVGProps<SVGSVGElement>>} = {
  plus: SVGIconPlus,
  discord: SVGIconDiscord,
  github: SVGIconGithub,
  'arrow-up-right': SVGIconArrowUpRight,
  'scroll-left': SVGIconScrollArrowLeft,
  'scroll-right': SVGIconScrollArrowRight,
}

/**
 * The `Button` component represents an interactive button that can be used in multiple parts of an application without the need to recreate it each time.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Button-1-0-0-c991739af02b4e649f23b9b573c89b66
 *
 * @param variant - The visual style variant of the button.
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 * @param as - Optionally change the underlying component type or custom component for the button. For example, this can be used to render the component as a 'Next.js Link' instead of a 'button'.
 * @param href - If the button is rendered as a 'Next.js Link', 'href' can be provided to specify the link's destination.
 * @param svg - Optionally adding a predetermined svg, available svg: 'plus', 'discord', 'github', 'arrow-up-right'
 * @param content - Content of the button
 */
const Button: FC<ButtonProps> = ({as: Component = 'button', href = '', variant = 'primary', className = '', svg = '', content = '', noShadow = false, target = '', ...props }) => {
  // #F6EFE4 = sand color
  const essentialStyles = `flex flex-row items-center align-middle justify-between ${noShadow ? 'shadow-[4px_4px_0_0_#F6EFE4]' : 'shadow-[4px_4px_0_0_black]'} w-fit h-fit text-[black] font-bold uppercase border border-2 whitespace-nowrap rounded-md transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none`;
  let styles = `${essentialStyles} ${btnVariants[variant]} ${className}`;
  if(svg !== ''){       // icon present 
    if(content !== ''){ // icon present - content
      styles += ' px-[1.95rem] py-[0.45rem] sm:px-[1.5rem] sm:py-[0.4rem] md:px-[1.5rem] md:py-[0rem] lg:px-[2.51rem] lg:py-[0.7rem] xl:px-[2.51rem] xl:py-[0.7rem] 2xl:px-[2.51rem] 2xl:py-[0.7rem] gap-x-[0.8rem]';
    } else {            // icon present - no content
      styles += ' p-[0.7rem]';
    }
  } else {        // no icon present - content
    styles += ' px-[1.95rem] py-[0.45rem] sm:px-[1.5rem] sm:py-[0.4rem] md:px-[1.5rem] md:py-[0rem] lg:px-[2.51rem] lg:py-[0.7rem] xl:px-[2.51rem] xl:py-[0.7rem] 2xl:px-[2.51rem] 2xl:py-[0.7rem]';
  }

  const componentProps = {
    'aria-label': content,
    ...props,
    ...(href ? { href } : {}),
    ...(target ? { target } : {}),
    className: styles,
  };

  let SVGIcon = null;

  if (Object.keys(svgVariants).includes(svg)){
    SVGIcon = svgVariants[svg];
  }

  const labelStyle = `flex text-[1.8rem] xs:text-[1.8rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[4rem] items-center justify-center`

  return (
    <Component {...componentProps}>
      {content !== '' &&  <div className={labelStyle} dangerouslySetInnerHTML={{__html: content}} /> }
      {SVGIcon && <div className='flex w-full justify-center items-center'><SVGIcon /></div>}
    </Component>
  );
};

Button.displayName = 'Button';

export default Button;