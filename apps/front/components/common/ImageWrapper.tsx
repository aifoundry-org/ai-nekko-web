import Image from 'next/image';

export default function ImageWrapper({src, alt, style, className, onClick}: {src: string, alt: string, style?: {[key:string]: string}, className?: string, onClick?: () => void}) {
    return (
        <Image onClick={onClick} className={className} priority={true} width="0" height="0" sizes="100vw" style={{width: '100%', height: 'auto', ...style}} src={src} alt={alt} />
    )
}