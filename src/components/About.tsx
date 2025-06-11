import React from 'react';
import { Code, Brain, Trophy, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'I have good experience with modern web tools like React, JavaScript, Nodejs, Expressjs, and MongoDB'
    },
  {
  icon: Brain,
  title: 'Problem Solving',
  description: 'I have solved 500+ quality of problems on LeetCode and 200+ on GeeksforGeeks',
 
},

    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Maintaining decent academic performance with CGPA of 7.68 at NIT Patna'
    },
    {
      icon: Users,
      title: 'Membership',
      description: 'Active team member in Science and Environmental Club, contributing to community initiatives'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-lg text-gray-300 mb-16 leading-relaxed">
            <p className="mb-6">
I'm an Electronics and Communication Engineering student at NIT Patna with a solid background in programming and web development. I'm curious by nature and enjoy building practical and innovative tech solutions that can make a real impact.


            </p>
            <p className="mb-6">
             I enjoy tackling complex problems and building user-friendly 
              applications. My experience ranges from developing responsive web applications to solving algorithmic challenges 
              on competitive programming platforms.
            </p>
            <p>
 I enjoy traveling and observing the creative wonders of nature.


            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;