import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Parallax, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    title: 'Growth-Stage Startup Investment Analysis',
    description: 'Evaluated growth-stage startup performance indicators using Excel-based financial trend analysis and market benchmarking to identify investment readiness signals across multiple industry segments supporting structured opportunity comparison. Analyzed revenue growth patterns, customer acquisition trends, and market positioning metrics using exploratory data analysis to prioritize high-potential investment candidates improving screening efficiency by 20%. Developed Power BI visual dashboards summarizing funding patterns, valuation indicators, and sector-level growth signals.',
    tech: ['Excel', 'Power BI', 'Financial Trend Analysis', 'Market Benchmarking', 'Exploratory Data Analysis'],
    image: '/healthcare.jpeg',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Signals in the Data: Unlocking Hidden Marketing Insights',
    description: 'Explored multi-channel marketing datasets using SQL queries and exploratory data analysis techniques to uncover hidden engagement signals supporting campaign targeting refinement decisions. Segmented audience interaction behavior using clustering logic in R to identify preference-based engagement groups improving campaign insight interpretation accuracy by 18%. Built Looker Studio visualizations integrating campaign traffic trends and conversion behavior indicators.',
    tech: ['SQL', 'R', 'Looker Studio', 'Exploratory Data Analysis', 'Clustering Data'],
    image: '/iot.jpeg',
    gradient: 'from-green-500/20 to-teal-500/20'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--sandstone)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Navigation, Parallax, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            parallax={true}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-full md:!w-[600px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      data-swiper-parallax="-100"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 
                      className="text-2xl font-heading text-gradient"
                      data-swiper-parallax="-200"
                    >
                      {project.title}
                    </h3>

                    <p 
                      className="text-muted-foreground leading-relaxed"
                      data-swiper-parallax="-300"
                    >
                      {project.description}
                    </p>

                    <div 
                      className="flex flex-wrap gap-2"
                      data-swiper-parallax="-400"
                    >
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <div 
                      className="flex gap-4 pt-4"
                      data-swiper-parallax="-500"
                    >
                      <Button variant="outline" className="btn-glow flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button variant="outline" className="btn-glow flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
