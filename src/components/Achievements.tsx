import React from 'react';
import { Trophy, Target, Medal, TrendingUp, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Knight',
      description: 'Achieved Knight status on LeetCode with maximum rating of 1854',
      icon: Trophy,
      stats: '500+ Problems Solved',
      link: 'https://leetcode.com/u/sittu_kr/',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'GeeksforGeeks Champion',
      description: 'Solved 200+ problems on GeeksforGeeks platform',
      icon: Target,
      stats: '200+ Problems Solved',
      link: 'https://www.geeksforgeeks.org/user/piyushyadav67/',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JEE Achievement',
      description: 'Ranked among top 2.5% in JEE 2022 examination',
      icon: Medal,
      stats: 'Top 2.5% Rank',
      link: '#',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const codingProfile = {
    leetcode: {
      problems: '500+',
      rating: '1854 (Max)',
      rank: 'Knight'
    },
    gfg: {
      problems: '200+',
      rating: 'Active',
      rank: 'active user'
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>

          {/* Main Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="text-lg font-semibold text-blue-400 mb-4">
                    {achievement.stats}
                  </div>
                  
                  <a
                    href={achievement.link}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Coding Profile Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Coding Profile Statistics</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* LeetCode Stats */}
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl border border-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">LeetCode</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Problems Solved:</span>
                    <span className="text-orange-400 font-semibold">{codingProfile.leetcode.problems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Max Rating:</span>
                    <span className="text-orange-400 font-semibold">{codingProfile.leetcode.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Current Rank:</span>
                    <span className="text-orange-400 font-semibold">{codingProfile.leetcode.rank}</span>
                  </div>
                </div>
              </div>

              {/* GeeksforGeeks Stats */}
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">GeeksforGeeks</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Problems Solved:</span>
                    <span className="text-green-400 font-semibold">{codingProfile.gfg.problems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400 font-semibold">{codingProfile.gfg.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Activity:</span>
                    <span className="text-green-400 font-semibold">{codingProfile.gfg.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;