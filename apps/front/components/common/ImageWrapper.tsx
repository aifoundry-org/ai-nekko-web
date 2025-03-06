import Image from 'next/image';

export default function ImageWrapper({src, alt, style, className}: {src: string, alt: string, style?: {[key:string]: string}, className?: string}) {
    return (
        <Image className={className} priority={true} width="0" height="0" sizes="100vw" style={{width: '100%', height: 'auto', ...style}} src={src} alt={alt} />
    )
}