import { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'React'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind']
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with detailed forecasts, maps, and location-based recommendations.',
      tech: ['JavaScript', 'API', 'CSS']
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 z-50 ${
          darkMode
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100 shadow-lg'
        }`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <div className="mb-8">
            <div className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center text-5xl font-bold transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600'
                : 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500'
            }`}>
              周
            </div>
          </div>

          <div className={`inline-block mb-6 px-6 py-2 rounded-full ${
            darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
          }`}>
            <p className="text-sm font-medium">Full Stack Developer</p>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            周晨辰
          </h1>

          <p className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            热爱编程的开发者，专注于构建优雅且高效的Web应用。
            致力于用代码创造价值，让技术改变生活。
          </p>

          <div className="flex justify-center gap-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
                }`}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </header>

        <section className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            技能专长
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => {
              const gradients = [
                'from-blue-600 to-cyan-600',
                'from-purple-600 to-pink-600',
                'from-emerald-600 to-teal-600',
                'from-orange-600 to-red-600',
                'from-indigo-600 to-blue-600'
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <span
                  key={skill}
                  className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    darkMode
                      ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-blue-500/30`
                      : `bg-gradient-to-r ${gradient} text-white shadow-lg`
                  }`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-500 group cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2'
                    : 'bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className={darkMode ? 'text-gray-400' : 'text-gray-500'}
                  />
                </div>

                <p className={`mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className={`mt-20 pt-8 border-t text-center ${
          darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          <p>© 2024 周晨辰. 保留所有权利.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
