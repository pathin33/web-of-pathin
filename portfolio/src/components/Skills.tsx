import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 80 },
    { name: 'Redis', level: 75 },
    { name: 'RESTful API', level: 90 },
    { name: 'GraphQL', level: 70 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 85 },
  ];

  const skillIcons: { [key: string]: string } = {
    'Node.js': '🟢',
    'Express.js': '⚡',
    'JavaScript': '📜',
    'TypeScript': '🔷',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'MySQL': '🐬',
    'Redis': '🔴',
    'RESTful API': '🔌',
    'GraphQL': '◼️',
    'Docker': '🐳',
    'Git': '📦'
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
            Kỹ năng & Công nghệ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Các công nghệ và framework tôi sử dụng hàng ngày để xây dựng các ứng dụng backend mạnh mẽ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skillIcons[skill.name]}</span>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {skill.level}%
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary via-blue-500 to-primary h-3 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Skill level indicator */}
              <div className="mt-3 text-sm text-gray-500 font-medium">
                {skill.level >= 85 ? '⭐ Expert' : skill.level >= 75 ? '💪 Advanced' : '📚 Intermediate'}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Luôn học hỏi & phát triển</h3>
            <p className="text-gray-600">
              Tôi không ngừng cập nhật kiến thức với các công nghệ mới nhất trong lĩnh vực Backend Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
