import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech. ECE',
      institution: 'National Institute of Technology, Patna',
      year: '2026',
      cgpa: '7.68',
      description: 'Bachelor of Technology in Electronics and Communications Engineering'
    },
    {
      degree: 'Senior Secondary',
      institution: 'Gaya College, Gaya/Bihar Board',
      year: '2021',
      cgpa: '87.2',
      description: 'Higher Secondary Education with focus on Science'
    },
    {
      degree: 'Secondary',
      institution: 'Al-Momin Intl Sch, Gaya',
      year: '2019',
      cgpa: '93.6',
      description: 'Secondary School Education'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-gray-400 mb-4">{edu.description}</p>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">{edu.cgpa}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;