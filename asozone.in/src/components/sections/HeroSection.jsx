import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            className="floating-animation mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-bg text-white text-3xl mb-6 pulse-glow">
              <Smartphone />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Mobile App Growth</span>
            <br />
            <span className="text-gray-800">Consulting Expert</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Specializing in ASO, keyword ranking strategies, and organic growth solutions 
            that drive real results for your mobile applications.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-25 floating-animation" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;