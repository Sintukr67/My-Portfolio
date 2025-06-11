import React from 'react';
import { ExternalLink, Github, Cloud, Search, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A responsive weather application that displays real-time weather updates for various locations with seamless navigation and interactive features.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time weather data integration',
        'Location-based weather search',
        'Responsive design for all devices',
        'Cross-browser compatibility',
        'Optimized performance'
      ],
      icon: Cloud,
      github: 'https://github.com/Sintukr67/weather-app-project',
      live: 'https://sintukr67.github.io/weather-app-project/',
      status: 'Completed',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-green-400 font-medium">{project.status}</span>
                            <span className="text-sm text-gray-400">{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">More projects coming soon...</p>
            <div className="flex justify-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;