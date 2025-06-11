import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'JavaScript', 'Python'],
      color: 'from-blue-500 to-cyan-500'
      
    },
    {
      title: 'Technologies',
      icon: Database,
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'OOP', 'OS', 'Computer Networks', 'DBMS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git & GitHub', 'VS Code', 'Xilinx'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'I am really good at',
      icon: Brain,
      skills: ['Problem Solving', 'Web Development', 'Software Engineering'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Level Indicators */}
          <div className="mt-16 p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Advanced</h4>
                <p className="text-gray-400 text-sm">C++, Problem Solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Intermediate</h4>
                <p className="text-gray-400 text-sm">JavaScript, DBMS,OOPS, Computer Networks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Beginner</h4>
                <p className="text-gray-400 text-sm">Python, Advanced OS Concepts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;