import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../types';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-12 py-12 max-w-7xl mx-auto">
      <Link to="/" className="inline-block mb-12 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
        ← Back to Works
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <div className="text-sm font-mono opacity-50 mb-4">{project.number}</div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg md:text-xl font-serif italic opacity-60">{project.category}</p>
      </motion.div>

      {/* Main Project Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full aspect-[16/9] bg-black/5 mb-24 overflow-hidden"
      >
        <img 
          src={project.imageUrl} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Galleries */}
      {project.galleries && project.galleries.length > 0 && (
        <div className="flex flex-col gap-24">
          {project.galleries.map((gallery, gIndex) => (
            <div key={gIndex} className="flex flex-col gap-8">
              <h2 className="text-2xl font-serif italic border-b border-line pb-4">{gallery.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gallery.images.map((imgUrl, iIndex) => (
                  <motion.div
                    key={iIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: iIndex * 0.1 }}
                    className="aspect-[4/3] bg-black/5 overflow-hidden"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} - ${gallery.name} - ${iIndex + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
