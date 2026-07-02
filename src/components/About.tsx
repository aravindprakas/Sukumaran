import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Sukumar</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sales training workshop"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              SRUSHTI MANAGEMENT SERVICES - INDIA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Sukumar Rangappan is a seasoned sales strategist with over two decades 
              of experience transforming sales teams across industries. As the founder 
              of Srushti Management Services, he combines deep sales expertise with 
              cutting-edge AI tools to help businesses close more deals and build 
              sustainable revenue engines.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-[1.15] tracking-tight text-gray-300">
            "HELPED OVER<br />
            <span className="text-white md:underline md:underline-offset-8">500+ BUSINESSES</span><br />
            SCALE THEIR SALES<br />
            REVENUE GLOBALLY."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            AI INTEGRATED<br />
            SALES COACHING
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              After years of leading high-performing sales teams at Fortune 500 
              companies, Sukumar recognized a gap in how sales professionals were 
              being trained. He founded Srushti Management Services to bring a 
              modern, AI-driven approach to sales coaching — one that focuses on 
              real results, not just theory.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business strategy session"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              CORPORATE TRAINING - GLOBAL
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AI-powered sales analytics"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              AI-POWERED SALES TRANSFORMATION<br />
              (2024)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Today, Sukumar integrates AI tools into every aspect of the sales 
              process — from prospecting and lead scoring to closing techniques 
              and pipeline management. His unique methodology has helped businesses 
              across India, the Middle East, and Southeast Asia dramatically 
              increase their conversion rates and build predictable revenue streams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
