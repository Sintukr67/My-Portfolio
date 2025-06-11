import React from 'react';
import profileImg from './jpg.jpg'; 
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const contacts = [
    { icon: Mail, href: 'mailto:sineuk.ug22.ec@nitp.ac.in', label: 'sineuk.ug22.ec@nitp.ac.in' },
    { icon: Phone, href: 'tel:+916200751473', label: '+91-6200751473' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Sintu Kumar', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Sintukr67', label: 'GitHub' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl overflow-hidden">
  
    <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />

 
    
  
</div>


          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sintu Kumar
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium">
            B.Tech student at NIT Patna
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"> 
            I'm passionate in problem-solving and building innovative web applications.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-gray-300 hover:text-blue-400 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">{contact.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;