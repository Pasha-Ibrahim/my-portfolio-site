import { User, Code, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-blue-500">PashaDev</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Mən frontend və web development ilə məşğul olan developerəm. Müasir
          texnologiyalarla sürətli, responsive və estetik saytlar hazırlamağı
          sevirəm.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <User size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
            <p className="text-gray-400">
              Mən web texnologiyalarını öyrənən və layihələr hazırlayan
              developerəm. Məqsədim real layihələr üzərində işləyərək
              professional səviyyəyə çatmaqdır.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <Code size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, React və Next.js ilə işləyirəm. Müasir UI
              dizaynları və performanslı web tətbiqləri hazırlamağa
              fokuslanıram.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <Globe size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Goal</h3>
            <p className="text-gray-400">
              Məqsədim dünya səviyyəsində istifadə olunan layihələrdə iştirak
              etmək və güclü developer olmaqdır.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
