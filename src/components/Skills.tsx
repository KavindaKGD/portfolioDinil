import { motion, type Variants } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import Section from './Section';
import * as SiIcons from 'react-icons/si';
import * as Io5Icons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';

// Map slugs to React Icons
const iconMap: Record<string, any> = {
  powerbi: SiIcons.SiSimpleicons, // Fallback if SiPowerbi is missing
  looker: SiIcons.SiLooker,
  tableau: Io5Icons.IoLogoTableau,
  googleanalytics: SiIcons.SiGoogleanalytics,
  d3dotjs: SiIcons.SiD3,
  python: SiIcons.SiPython,
  javascript: SiIcons.SiJavascript,
  typescript: SiIcons.SiTypescript,
  html5: SiIcons.SiHtml5,
  css3: SiIcons.SiCss,
  r: SiIcons.SiR,
  react: SiIcons.SiReact,
  nextdotjs: SiIcons.SiNextdotjs,
  nodedotjs: SiIcons.SiNodedotjs,
  express: SiIcons.SiExpress,
  mysql: SiIcons.SiMysql,
  oracle: GrIcons.GrOracle,
  postgresql: SiIcons.SiPostgresql,
  mongodb: SiIcons.SiMongodb,
  firebase: SiIcons.SiFirebase,
  redis: SiIcons.SiRedis,
  git: SiIcons.SiGit,
  docker: SiIcons.SiDocker,
  vite: SiIcons.SiVite,
  postman: SiIcons.SiPostman,
  figma: SiIcons.SiFigma,
  adobephotoshop: RiIcons.RiImageEditFill,
  jupyter: SiIcons.SiJupyter,
  microsoftexcel: RiIcons.RiFileExcel2Fill,
};

// Map slugs to brand colors
const colorMap: Record<string, string> = {
  powerbi: '#F2C811',
  looker: '#4285F4',
  tableau: '#E97627',
  googleanalytics: '#E37400',
  d3dotjs: '#F9A03C',
  python: '#3776AB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  html5: '#E34F26',
  css3: '#1572B6',
  r: '#276DC3',
  react: '#61DAFB',
  nextdotjs: '#FFFFFF',
  nodedotjs: '#339933',
  express: '#FFFFFF',
  mysql: '#4479A1',
  oracle: '#F80000',
  postgresql: '#4169E1',
  mongodb: '#47A248',
  firebase: '#FFCA28',
  redis: '#DC382D',
  git: '#F05032',
  docker: '#2496ED',
  vite: '#646CFF',
  postman: '#FF6C37',
  figma: '#F24E1E',
  adobephotoshop: '#31A8FF',
  jupyter: '#F37626',
  microsoftexcel: '#217346',
};

export default function Skills() {
  const allSkills = skillGroups.flatMap(group => group.skills);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  return (
    <Section
      id="skills"
      eyebrow="Technical Arsenal"
      title="Skills & Technologies"
      description="A comprehensive stack of tools and languages for data science, web development, and business analytics."
    >
      <div className="relative mx-auto max-w-5xl py-12 px-4 sm:px-6">
        {/* Background cosmic glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 sm:gap-x-14 sm:gap-y-16"
        >
          {allSkills.map((skill) => {
            const IconComponent = iconMap[skill.slug] || SiIcons.SiCodeigniter;
            const iconColor = colorMap[skill.slug] || '#8B5CF6';

            return (
              <motion.div
                key={skill.slug}
                variants={itemVariants}
                className="group relative flex flex-col items-center"
              >
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#030014]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:-top-14 group-hover:opacity-100 pointer-events-none z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {skill.name}
                </div>

                {/* Icon Container */}
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-125">
                  {/* Subtle Brand Glow */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: iconColor }}
                  />
                  
                  <IconComponent 
                    size="100%" 
                    className="relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_var(--glow-color)]"
                    style={{ 
                      color: iconColor,
                      // @ts-ignore
                      '--glow-color': iconColor 
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
