import React from 'react';
import { motion, type Variants } from 'motion/react';

interface RiseTextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
  inlinePill?: {
    index: number; // Word index after which the pill appears
    content: React.ReactNode;
    width?: string;
  };
  highlightWords?: string[];
  highlightClassName?: string;
}

const wordVariants: Variants = {
  hidden: {
    y: '125%',
    opacity: 0,
  },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // Power4.out curve from Rise at Seven
      delay: i,
    },
  }),
};

const pillVariants: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
    scale: 0.8,
  },
  visible: (delayTime: number) => ({
    width: 'auto',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: delayTime,
    },
  }),
};

export const RiseTextReveal: React.FC<RiseTextRevealProps> = ({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0.1,
  stagger = 0.02,
  immediate = false,
  inlinePill,
  highlightWords = [],
  highlightClassName = 'text-emerald-800 underline decoration-emerald-500/40 decoration-wavy decoration-2 underline-offset-6',
}) => {
  const words = text.split(' ');

  const animationProps = immediate
    ? {
        initial: 'hidden',
        animate: 'visible',
      }
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.25 },
      };

  const normalizedHighlights = highlightWords.map((w) =>
    w.toLowerCase().replace(/[^a-z0-9]/g, '')
  );

  return (
    <Tag className={`font-['Outfit',sans-serif] tracking-tight leading-[1.08] ${className}`}>
      <motion.span
        className="inline-flex flex-wrap items-baseline gap-x-[0.28em] gap-y-[0.08em]"
        {...animationProps}
      >
        {words.map((word, index) => {
          const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
          const isHighlight = normalizedHighlights.includes(cleanWord);

          const wordDelay = delay + index * stagger;
          const showPillAfter = inlinePill && inlinePill.index === index;

          return (
            <React.Fragment key={`${word}-${index}`}>
              {/* Outer mask container matching Rise at Seven overflow-hidden pattern */}
              <span className="inline-flex overflow-hidden pt-0.5 pb-1 -mt-0.5 -mb-1 align-baseline">
                <motion.span
                  custom={wordDelay}
                  variants={wordVariants}
                  className={`inline-block whitespace-nowrap will-change-transform ${
                    isHighlight ? highlightClassName : ''
                  }`}
                >
                  {word}
                </motion.span>
              </span>

              {/* Rise at Seven Signature Inline Expanding Media/Badge Pill */}
              {showPillAfter && (
                <span className="inline-flex overflow-hidden items-center align-middle mx-1 self-center">
                  <motion.span
                    custom={wordDelay + 0.08}
                    variants={pillVariants}
                    className="inline-flex items-center justify-center shrink-0 overflow-hidden"
                  >
                    {inlinePill.content}
                  </motion.span>
                </span>
              )}
            </React.Fragment>
          );
        })}
      </motion.span>
    </Tag>
  );
};
