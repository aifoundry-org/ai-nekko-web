'use client';

import { forwardRef, lazy, Suspense } from 'react';
import type { DotLottieCommonPlayer } from '@dotlottie/react-player';

const DotLottiePlayer = lazy(() => import('@dotlottie/react-player').then(mod => ({ default: mod.DotLottiePlayer })));

interface LottiePlayerProps {
  className?: string;
  src: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottiePlayer = forwardRef<DotLottieCommonPlayer | null, LottiePlayerProps>(
  ({ className, src, loop = true, autoplay = true, ...props }, ref) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DotLottiePlayer className={className} src={src} ref={ref} autoplay={autoplay} loop={loop} {...props} renderer='svg' />
      </Suspense>
    );
  }
);

LottiePlayer.displayName = 'LottiePlayer';

export default LottiePlayer;
