import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Expert ASO</span>
              <br />
              <span className="text-gray-800">Consulting Services</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I specialize in delivering end-to-end software services that drive mobile app growth. 
              My core expertise lies in Keyword Ranking strategies, App Store Optimization (ASO), 
              and tailored consulting.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I help app developers and businesses improve their app visibility, increase organic 
              downloads, and retain users effectively. With data-driven insights and proven techniques, 
              I work closely with clients to optimize their presence on platforms like the Apple App 
              Store and Google Play Store.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-purple-100 px-4 py-2 rounded-full">
                <Target className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Strategic Growth</span>
              </div>
              <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Data-Driven Results</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                alt="Mobile app analytics dashboard showing growth metrics"
               src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;