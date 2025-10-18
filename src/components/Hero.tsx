export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-primary hover:text-primary-dark transition-colors">Muhammad</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          I build exceptional digital experiences with modern web technologies. 
          Currently focused on creating accessible, user-friendly applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border-2 border-primary text-primary dark:border-primary dark:text-primary-light rounded-lg font-medium hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
