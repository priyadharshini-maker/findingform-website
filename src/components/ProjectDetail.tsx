import { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../types';
import OtpModal from './OtpModal';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end bottom"]
  });
  
  // Natural fade of the image into the background
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-6 py-12 max-w-[1400px] mx-auto relative">
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

      {/* Hero Section with Scroll Animation */}
      <div ref={heroRef} className="relative h-[150vh] mb-24 w-full">
        <div className="sticky top-32 w-full flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 8rem)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-bg overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <motion.div style={{ scale: imageScale, filter: imageBlur, opacity: imageOpacity }} className="w-full h-full origin-center">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="flex flex-col items-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-6 text-center max-w-3xl">
                <span className="text-bg font-medium tracking-widest uppercase text-2xl md:text-4xl mb-4">
                  {project.title}
                </span>
                {project.description && (
                  <p className="text-bg/80 text-sm md:text-base mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOtpModalOpen(true);
                  }}
                  className="bg-bg text-ink px-8 py-4 text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-opacity shadow-2xl whitespace-nowrap"
                >
                  View Project Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Galleries */}
      {project.galleries && project.galleries.length > 0 && (
        <div className="flex flex-col gap-24 relative z-20 bg-bg">
          {project.galleries.map((gallery, gIndex) => {
            const rows = [];
            for (let i = 0; i < gallery.images.length; i += 2) {
              rows.push(gallery.images.slice(i, i + 2));
            }
            return (
              <div key={gIndex} className="flex flex-col gap-8">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl font-serif italic border-b border-line pb-4 bg-bg relative z-30"
                >
                  {gallery.name}
                </motion.h2>
                <div className="relative">
                  {rows.map((row, rIndex) => (
                    <div 
                      key={rIndex} 
                      className="sticky top-24 w-full bg-bg pt-4 pb-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {row.map((img, iIndex) => {
                          const imgUrl = typeof img === 'string' ? img : img.url;
                          const caption = typeof img === 'string' ? `${gallery.name} Image ${rIndex * 2 + iIndex + 1}` : img.caption;
                          
                          return (
                            <motion.div
                              key={iIndex}
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 1, delay: iIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                              className="aspect-[4/3] bg-black/5 overflow-hidden shadow-sm relative group cursor-pointer"
                            >
                              <img 
                                src={imgUrl} 
                                alt={`${project.title} - ${caption}`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-bg font-medium tracking-widest uppercase text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  {caption}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <OtpModal 
        isOpen={isOtpModalOpen} 
        onClose={() => setIsOtpModalOpen(false)} 
        onSuccess={() => navigate(`/project/${project.id}/secure-details`)}
      />
    </div>
  );
}
