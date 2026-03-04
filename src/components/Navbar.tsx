import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 md:px-12 border-b border-line sticky top-0 bg-bg/90 backdrop-blur-md z-50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center"
      >
        <img 
          src="https://i.postimg.cc/qqr3xgSC/Trubuild-Logo-(2).png" 
          alt="Trubuild Logo" 
          className="h-12 md:h-16 object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="flex gap-8 text-xs font-medium tracking-widest uppercase">
        <a href="#" className="hover:opacity-50 transition-opacity">Works</a>
        <a href="#" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
    </nav>
  );
}
