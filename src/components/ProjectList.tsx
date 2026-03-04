import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../types';

export default function ProjectList() {
  return (
    <div className="w-full px-4 md:px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-32 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={`/project/${project.id}`} className="group cursor-pointer flex flex-col block">
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[16/9] mb-6 bg-black/5">
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm font-mono opacity-50"
                >
                  {project.number}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-4xl font-light tracking-tight"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg font-serif italic opacity-60"
                >
                  {project.category}
                </motion.p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
