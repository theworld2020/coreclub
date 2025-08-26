import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import { 
  Smartphone, 
  TrendingUp, 
  Star, 
  Award,
  Search,
  Users,
  Download
} from 'lucide-react';


const App = () => {
  const servicesData = [
    {
      icon: Search,
      title: "Keyword Ranking",
      description: "Strategic keyword optimization to boost your app's discoverability in app stores."
    },
    {
      icon: TrendingUp,
      title: "App Store Optimization",
      description: "Complete ASO strategy including metadata, visuals, and conversion optimization."
    },
    {
      icon: Download,
      title: "Organic Growth",
      description: "Proven techniques to increase organic downloads and user acquisition."
    },
    {
      icon: Users,
      title: "User Retention",
      description: "Data-driven strategies to improve user engagement and retention rates."
    }
  ];

  const statsData = [
    { icon: Smartphone, value: "500+", label: "Apps Optimized" },
    { icon: TrendingUp, value: "300%", label: "Avg. Growth Rate" },
    { icon: Star, value: "4.9", label: "Client Rating" },
    { icon: Award, value: "5+", label: "Years Experience" }
  ];
  
  const YOUR_EMAILJS_SERVICE_ID = 'service_aokax7f';
  const YOUR_EMAILJS_TEMPLATE_ID = 'template_p68nbu9';
  const YOUR_EMAILJS_USER_ID = '9J3asaOTYKvu7aVjx';


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Toaster />
      <HeroSection />
      <StatsSection stats={statsData} />
      <AboutSection />
      <ServicesSection services={servicesData} />
      <ContactSection 
        emailJsServiceId={YOUR_EMAILJS_SERVICE_ID}
        emailJsTemplateId={YOUR_EMAILJS_TEMPLATE_ID}
        emailJsUserId={YOUR_EMAILJS_USER_ID}
      />
      <Footer />
    </div>
  );
};

export default App;