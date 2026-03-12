'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]
const easeCurtain: [number, number, number, number] = [0.22, 1, 0.36, 1]

const logoStyle = { fontFamily: 'var(--font-playfair), serif' }

export function PageLoader() {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading')

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setPhase('reveal')
    }, 3400)

    // Give enough time for curtain to fully finish (delay 0.35 + duration 1.3 = 1.65s + buffer)
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 5600)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'done') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Top curtain */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[50vh] bg-bg-primary"
        animate={
          phase === 'reveal'
            ? { y: '-100%' }
            : { y: 0 }
        }
        transition={{
          duration: 1.3,
          ease: easeCurtain,
          delay: phase === 'reveal' ? 0.2 : 0,
        }}
      />

      {/* Bottom curtain */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[50vh] bg-bg-primary"
        animate={
          phase === 'reveal'
            ? { y: '100%' }
            : { y: 0 }
        }
        transition={{
          duration: 1.3,
          ease: easeCurtain,
          delay: phase === 'reveal' ? 0.35 : 0,
        }}
      />

      {/* Cherry accent line at the split */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-accent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          phase === 'reveal'
            ? { scaleX: 1, opacity: [0, 1, 1, 0] }
            : { scaleX: 0, opacity: 0 }
        }
        transition={{
          duration: 0.8,
          ease: easeOutExpo,
          delay: phase === 'reveal' ? 0.05 : 0,
        }}
      />

      {/* Center content (logo + line) */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{
              opacity: 0,
              scale: 1.12,
              filter: 'blur(6px)',
              transition: {
                duration: 0.5,
                ease: easeOutExpo,
              },
            }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-[2.8rem] tracking-[0.2em] text-text-primary font-light"
                    style={logoStyle}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: easeOutExpo,
                      delay: 0.3,
                    }}
                  >
                    EN
                  </motion.span>
                </div>
                <div className="overflow-hidden -mt-2">
                  <motion.span
                    className="block text-[2.8rem] tracking-[0.2em] text-accent font-semibold"
                    style={logoStyle}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: easeOutExpo,
                      delay: 0.7,
                    }}
                  >
                    POINTE
                  </motion.span>
                </div>
              </div>

              {/* Animated line */}
              <motion.div
                className="w-[100px] h-[1px] bg-bg-surface overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.6,
                  ease: easeOutExpo,
                  delay: 1.1,
                }}
              >
                <motion.div
                  className="h-full w-full bg-accent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 1.2,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
