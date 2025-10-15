import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-2xl mb-4">
              <h3 className="text-3xl font-bold">NBT</h3>
            </div>
            <h4 className="text-xl font-bold mb-2">Nguyen Ba Thien</h4>
            <p className="text-blue-200 leading-relaxed">
              Backend Developer chuyên về Node.js & Express<br/>
              <span className="text-sm">🚀 Xây dựng API mạnh mẽ và hiệu quả</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Liên kết nhanh
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#skills" className="text-blue-200 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Kỹ năng
                </a>
              </li>
              <li>
                <a href="#projects" className="text-blue-200 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Dự án
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-6 flex items-center justify-center md:justify-end gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Liên hệ
            </h4>
            <div className="space-y-4">
              <a 
                href="https://github.com/pathin33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-blue-200 hover:text-white transition-all bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="mailto:nguyenbathien@example.com" 
                className="inline-flex items-center gap-3 text-blue-200 hover:text-white transition-all bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} Nguyen Ba Thien. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-blue-200">
              <span>Made with</span>
              <svg className="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>& React + Three.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
