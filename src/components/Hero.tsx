import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Disable parallax on mobile to avoid stutter
  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '-20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], isMobile ? [1, 1] : [1, 0])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ y: imageY, translateZ: 0 }}
      >
        <img
          src="/hero-image.png"
          alt="Sukumar Rangappan"
          className="w-full h-full md:h-[120%] object-cover object-center md:object-[70%_center]"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </motion.div>

      {/* Content - Parallax */}
      <motion.div
        className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity, translateZ: 0 }}
      >
        <div className="w-full max-w-5xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px white' }}>SUKUMAR</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px white' }}>RANGAPPAN</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px white' }}>SALES COACH</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              AI Integrated Sales Coach helping businesses close more deals, build stronger pipelines, and scale revenue with modern selling strategies.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
