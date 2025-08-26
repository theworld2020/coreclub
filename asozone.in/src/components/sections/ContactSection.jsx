import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Mail, Target, BarChart3, Users, AtSign } from 'lucide-react';

const ContactSection = ({ emailJsServiceId, emailJsTemplateId, emailJsUserId }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.contact || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Contact, and Description).",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.description.length > 500) {
      toast({
        title: "Description Too Long",
        description: "Please keep your description under 500 words.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    if (emailJsServiceId === 'YOUR_SERVICE_ID' || emailJsTemplateId === 'YOUR_TEMPLATE_ID' || emailJsUserId === 'YOUR_USER_ID') {
        toast({
            title: "EmailJS Not Configured",
            description: "Please configure EmailJS credentials in App.jsx to send emails.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }


    const templateParams = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      contact: formData.contact,
      description: formData.description,
      to_email: 'smileselvakumar07@gmail.com' 
    };

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams, emailJsUserId);
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', address: '', contact: '', description: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to accelerate your app's growth? Let's discuss your project and create a 
            customized strategy that delivers results.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-2xl border-0 glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700 font-medium">
                      Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address (optional)"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-gray-700 font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-gray-700 font-medium">
                      Project Description * (Max 500 words)
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell me about your app, current challenges, and what you'd like to achieve..."
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 min-h-32"
                      maxLength={500}
                      required
                      disabled={isSubmitting}
                    />
                    <div className="text-sm text-gray-500 text-right">
                      {formData.description.length}/500 words
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg rounded-lg shadow-lg"
                      disabled={isSubmitting}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Results</h4>
                    <p className="text-gray-600">Track record of increasing app visibility and downloads by 300% on average.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data-Driven Approach</h4>
                    <p className="text-gray-600">Every strategy is backed by comprehensive analytics and market research.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personalized Service</h4>
                    <p className="text-gray-600">Tailored strategies that fit your specific app category and target audience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img  
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
                alt="App store optimization consultation meeting"
               src="https://images.unsplash.com/photo-1490222939321-2a267366a124" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;