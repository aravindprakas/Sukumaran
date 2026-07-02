import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Founder & AI Sales Coach',
    company: 'Srushti Management Services',
    location: 'India',
    period: '2018 — Present',
    description: 'Founded and leads Srushti Management Services, an AI-integrated sales coaching firm. Developed proprietary AI-driven sales methodologies that have helped 500+ businesses scale revenue. Provides executive coaching, team training, and strategic sales consulting.',
    skills: ['AI Sales Strategy', 'Executive Coaching', 'Revenue Scaling', 'Team Building', 'Business Consulting'],
  },
  {
    title: 'Senior Sales Director',
    company: 'Enterprise Solutions Corp',
    location: 'Mumbai, India',
    period: '2014 — 2018',
    description: 'Led a team of 50+ sales professionals across APAC region. Implemented data-driven sales processes that increased quarterly revenue by 35%. Spearheaded the adoption of AI tools for lead scoring and pipeline optimization.',
    skills: ['Sales Leadership', 'APAC Markets', 'Data-Driven Sales', 'AI Implementation', 'Revenue Growth'],
  },
  {
    title: 'Regional Sales Manager',
    company: 'Global Tech Partners',
    location: 'Bangalore, India',
    period: '2010 — 2014',
    description: 'Managed B2B sales operations across South India and Southeast Asia. Built and mentored high-performing sales teams. Consistently exceeded annual targets by 20-30% through strategic account management and relationship selling.',
    skills: ['B2B Sales', 'Account Management', 'Team Mentoring', 'Strategic Selling', 'Market Expansion'],
  },
  {
    title: 'Sales Consultant',
    company: 'Business Growth Advisors',
    location: 'Chennai, India',
    period: '2006 — 2010',
    description: 'Provided sales consulting to SMEs and startups. Designed custom sales processes and training programs. Helped clients build their first sales teams and establish go-to-market strategies.',
    skills: ['Sales Consulting', 'Process Design', 'Startup Advisory', 'GTM Strategy', 'Sales Training'],
  },
  {
    title: 'Business Development Executive',
    company: 'National Sales Corp',
    location: 'India',
    period: '2002 — 2006',
    description: 'Started career in frontline sales, rapidly rising through the ranks. Developed deep expertise in prospecting, cold outreach, and relationship building. Won multiple "Top Performer" awards.',
    skills: ['Prospecting', 'Cold Outreach', 'Relationship Building', 'Account Growth', 'Target Achievement'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
