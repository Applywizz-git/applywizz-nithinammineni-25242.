// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start md:justify-end md:group-odd:justify-start">
//                   <Briefcase className="w-5 h-5 text-accent" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start md:justify-end md:group-odd:justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-accent justify-start md:justify-end md:group-odd:justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-champagne font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
























// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Data Engineer',
//     company: 'CVS Healthcare',
//     location: 'Buffalo Grove, IL',
//     period: 'May 2022 - Present',
//     highlights: [
//       'Designed scalable ETL pipelines using <span class="tech-highlight">Python, Java, and Apache Spark</span>, processing multi-terabyte pharmacy datasets, reducing data ingestion latency by 35%',
//       'Built REST APIs and microservices with <span class="tech-highlight">Spring Boot and NodeJS</span> to unify pharmacy data, improving interoperability by 40%',
//       'Implemented streaming pipelines with <span class="tech-highlight">Kafka and RabbitMQ</span> to process real-time pharmacy transactions',
//       'Optimized database operations by tuning SQL queries, indexing, and partitioning, improving query performance by 50%',
//       'Orchestrated cloud-based workflows on <span class="tech-highlight">AWS S3, Lambda, and Glue</span>, reducing manual intervention by 30%'
//     ]
//   },
//   {
//     title: 'Data Engineer',
//     company: 'Subaru',
//     location: 'Camden, NJ',
//     period: 'Oct 2021 - May 2022',
//     highlights: [
//       'Designed batch ETL pipelines using <span class="tech-highlight">Python, SQL, and Airflow</span>, consolidating vehicle telemetry and service records',
//       'Exposed vehicle telemetry data through RESTful APIs and <span class="tech-highlight">Spring Boot</span> microservices',
//       'Developed real-time streaming pipelines with <span class="tech-highlight">Apache Kafka</span>, increasing alert delivery by 35%',
//       'Leveraged <span class="tech-highlight">AWS Redshift, S3, and Lambda</span> for large-scale telemetry data pipelines'
//     ]
//   },
//   {
//     title: 'SQL Developer',
//     company: 'Goldman Sachs',
//     location: 'Salt Lake City, UT',
//     period: 'May 2018 - Sep 2021',
//     highlights: [
//       'Engineered complex SQL queries in <span class="tech-highlight">Oracle and Snowflake</span>, improving portfolio report generation by 45%',
//       'Created relational and dimensional data models with star and snowflake schemas',
//       'Developed ETL pipelines using <span class="tech-highlight">SQL, Spark SQL, and Python</span> for investment data',
//       'Constructed interactive <span class="tech-highlight">Tableau and Power BI</span> dashboards for wealth advisors',
//       'Implemented database performance tuning, raising analytics throughput by 50%'
//     ]
//   },
//   {
//     title: 'ETL Developer',
//     company: 'Edutech Information',
//     location: 'Hyderabad, India',
//     period: 'Aug 2016 - Apr 2018',
//     highlights: [
//       'Designed end-to-end ETL workflows with <span class="tech-highlight">Java, Spring, and JDBC</span> to merge HR and project datasets',
//       'Built RESTful APIs to provide processed HR data, reducing retrieval latency by 25%',
//       'Automated ETL build and deployment using <span class="tech-highlight">Maven and Jenkins</span>',
//       'Created unit and integration tests achieving 95% pipeline reliability'
//     ]
//   },
//   {
//     title: 'Data Platform Engineer',
//     company: 'Codon Software Pvt Ltd',
//     location: 'Hyderabad, India',
//     period: 'Oct 2014 - Aug 2016',
//     highlights: [
//       'Engineered batch and real-time ETL pipelines with <span class="tech-highlight">Java and Shell scripting</span>',
//       'Streamlined relational schemas and optimized <span class="tech-highlight">Oracle 11g and MySQL</span> queries',
//       'Developed RESTful and SOAP APIs to deliver processed retail data',
//       'Deployed <span class="tech-highlight">Jenkins-based CI/CD pipelines</span>, accelerating release cycles by 30%'
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-heading mb-4">
//             Professional <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative mb-12 ${
//                 index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
//               } md:w-1/2`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
//                 style={{
//                   [index % 2 === 0 ? 'right' : 'left']: '-8px',
//                   boxShadow: '0 0 20px hsl(var(--sandstone))'
//                 }}
//               />

//               <motion.div
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 className="glass-effect p-6 rounded-lg group cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 mb-3 justify-start">
//                   <Briefcase className="w-5 h-5 text-orange-500" />
//                   <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <span className="font-semibold">{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 text-left">
//                   {exp.highlights.map((highlight, i) => (
//                     <li 
//                       key={i} 
//                       className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
//                     >
//                       <span className="text-accent mt-1.5">▹</span>
//                       <span dangerouslySetInnerHTML={{ 
//                         __html: highlight.replace(
//                           /<span class="tech-highlight">(.*?)<\/span>/g, 
//                           '<span class="text-purple-700 font-medium">$1</span>'
//                         )
//                       }} />
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;














































import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Marketing Analytics Volunteer',
    company: 'American Marketing Association',
    location: 'Chicago, IL',
    period: 'Dec 2025 - Present',
    highlights: [
      'Analyzed email marketing campaign performance using <span class="tech-highlight">GA4</span> and engagement tracking metrics to evaluate open rate and CTR patterns, improving newsletter interaction consistency by 15%.',
      'Prepared monthly campaign performance reports using <span class="tech-highlight">Looker Studio</span> dashboards summarizing traffic behavior, engagement signals, and conversion indicators for stakeholder review discussions.',
      'Evaluated cross-channel campaign engagement trends using <span class="tech-highlight">GA4</span> session behavior and CTR analysis to support content targeting adjustments improving interaction stability by 18%.',
      'Tracked website user navigation behavior using heatmap analysis tools to identify attention zones and content drop-off areas supporting UX refinement recommendations.',
      'Interpreted consumer behavior patterns from session flow and heatmap interaction signals to support preference-based content positioning improvements across priority pages.',
      'Collaborated with communications teams to translate campaign performance insights into actionable messaging adjustments strengthening newsletter response rates by 12%.'
    ]
  },
  {
    title: 'Digital Marketing Analyst',
    company: 'Redmatter',
    location: 'Hyderabad, India',
    period: 'Jul 2023 - Jul 2025',
    highlights: [
      'Analyzed cross-channel campaign engagement metrics using <span class="tech-highlight">GA4</span> and <span class="tech-highlight">Advanced Excel</span> dashboards, supporting messaging adjustments that increased interaction rates by 30%.',
      'Developed recurring KPI dashboards tracking traffic behavior, conversion signals, and funnel engagement metrics used by stakeholders for performance monitoring and structured campaign experiment comparisons.',
      'Identified landing-page drop-off patterns through bounce-rate and time-on-page evaluation supporting UX updates that increased qualified lead capture by 20%.',
      'Examined regional traffic behavior across USA, UK, Australia, UAE, and Europe markets to support campaign optimization recommendations.',
      'Partnered with content and creative teams to translate engagement insights into messaging improvements that strengthened campaign effectiveness.',
      'Supported DV360 programmatic performance tracking through audience segmentation interpretation and campaign attribution signal evaluation across global visibility initiatives.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-champagne to-sandstone mx-auto" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-sandstone to-champagne" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              } md:w-1/2`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-0 w-4 h-4 bg-gradient-to-br from-champagne to-sandstone rounded-full shadow-glow"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-8px',
                  boxShadow: '0 0 20px hsl(var(--sandstone))'
                }}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-lg group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3 justify-start">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <h3 className="text-2xl font-heading text-gradient">{exp.title}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-500 justify-start">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-left">
                  {exp.highlights.map((highlight, i) => (
                    <li 
                      key={i} 
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">▹</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: highlight.replace(
                          /<span class="tech-highlight">(.*?)<\/span>/g, 
                          '<span class="text-purple-700 font-medium">$1</span>'
                        )
                      }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
