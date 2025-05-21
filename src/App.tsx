import './index.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase, FaTools, FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import { DiPython, DiJava, DiHtml5, DiReact, DiJavascript1 } from "react-icons/di";
import { SiCplusplus, SiTypescript, SiSui, SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiTailwindcss, SiSolidity } from "react-icons/si";
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from './hooks/useTranslation';

// add global styles
const globalStyles = {
  title: {
    fontFamily: 'var(--font-primary)',
    fontWeight: 'bold',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  },
  subtitle: {
    fontFamily: 'var(--font-primary)',
    fontWeight: 'bold',
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
  },
  paragraph: {
    fontFamily: 'var(--font-primary)',
    fontWeight: 'normal',
    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
  }
};

const App = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} p-4 sm:p-6 transition-colors duration-200`}>
      <div className="max-w-2xl mx-auto">
        <div className="w-full space-y-4">
          {/* Header section */}
          <header className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'} p-3 rounded-[3px] transition-colors duration-200`}>
            <div className='flex flex-col items-center space-y-4'>
              <div className="flex flex-row items-center justify-center space-x-4">
                <div className="avatar h-8 w-8 bg-gray-600 rounded-full overflow-hidden">
                  <img src="https://avatars.githubusercontent.com/u/56488393?v=4" alt="Profile" />
                </div>
                <h1 style={globalStyles.title}>Yusuf Anıl Yazıcı</h1>
              </div>

              <div className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4`}>
                <span className="flex items-center" style={globalStyles.paragraph}>
                  <FaMapMarkerAlt className="mr-2" />
                  {t('location')}
                </span>
                <span className="flex items-center" style={globalStyles.paragraph}>
                  <FaPhone className="mr-2" />
                  +90 553 849 59 61
                </span>
                <span className="flex items-center" style={globalStyles.paragraph}>
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:yusufanilyazici@gmail.com" className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
                    yusufanilyazici@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </header>

          {/* Education Section */}
          <section className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'} p-4 rounded-[3px] transition-colors duration-200`}>
            <h2 style={globalStyles.subtitle} className="mb-4 flex items-center">
              <FaGraduationCap className="mr-2" />
              {t('education')}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li style={globalStyles.paragraph}>
                <strong>{t('currentEducation')}</strong> (2021 - 2026)
              </li>
              <li style={globalStyles.paragraph}>{t('previousEducation')} (2017 - 2021)</li>
            </ul>
          </section>

          {/* Experience Section */}
          <section className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'} p-4 rounded-[3px] transition-colors duration-200`}>
            <h2 style={globalStyles.subtitle} className="mb-4 flex items-center">
              <FaBriefcase className="mr-2" />
              {t('experience')}
            </h2>
            <ul className="list-disc list-inside space-y-4">
              <li style={globalStyles.paragraph}>
                <strong>
                  <a href="https://suicityp2e.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} mr-1 transition-colors`}>
                    {t('suiCityRole')}
                  </a>
                </strong>{t('suiCityDate')}

                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`} style={globalStyles.paragraph}>
                  {t('suiCityDescription')}
                </p>
              </li>
              <li style={globalStyles.paragraph}>
                <strong>{t('freelanceRole')}</strong> {t('freelanceDate')}
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`} style={globalStyles.paragraph}>
                  {t('freelanceDescription')}
                </p>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'} p-6 rounded-[3px] overflow-hidden transition-colors duration-200`}>
            <h2 style={globalStyles.subtitle} className="mb-4 flex items-center">
              <FaTools className="mr-2" />
              {t('skills')}
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-items-center">
              <span className="px-1.5 py-0.5 bg-[#3776AB] text-white rounded-[3px] font-bold flex items-center">
                <DiPython className="mr-2 text-xl" />
                Python
              </span>
              <span className="px-1.5 py-0.5 bg-[#ED8B00] text-white rounded-[3px] font-bold flex items-center">
                <DiJava className="mr-2 text-xl" />
                Java
              </span>
              <span className="px-1.5 py-0.5 bg-[#00599C] text-white rounded-[3px] font-bold flex items-center">
                <SiCplusplus className="mr-2 text-xl" />
                C/C++
              </span>
              <span className="px-1.5 py-0.5 bg-[#E34F26] text-white rounded-[3px] font-bold flex items-center">
                <DiHtml5 className="mr-2 text-xl" />
                HTML/CSS
              </span>
              <span className="px-1.5 py-0.5 bg-[#F7DF1E] text-black rounded-[3px] font-bold flex items-center">
                <DiJavascript1 className="mr-2 text-xl" />
                Javascript
              </span>
              <span className="px-1.5 py-0.5 bg-[#3178C6] text-white rounded-[3px] font-bold flex items-center">
                <SiTypescript className="mr-2 text-xl" />
                Typescript
              </span>
              <span className="px-1.5 py-0.5 bg-[#61DAFB] text-black rounded-[3px] font-bold flex items-center">
                <DiReact className="mr-2 text-xl" />
                React
              </span>
              <span className="px-1.5 py-0.5 bg-[#6B4C9F] text-white rounded-[3px] font-bold flex items-center">
                <SiSui className="mr-2 text-xl" />
                Move
              </span>
              <span className="px-1.5 py-0.5 bg-[#FF0000] text-white rounded-[3px] font-bold flex items-center">
                <SiAdobepremierepro className="mr-2 text-xl" />
                Premiere Pro
              </span>
              <span className="px-1.5 py-0.5 bg-[#FF00FF] text-white rounded-[3px] font-bold flex items-center">
                <SiAdobeaftereffects className="mr-2 text-xl" />
                After Effects
              </span>
              <span className="px-1.5 py-0.5 bg-[#7e7e7e] text-white rounded-[3px] font-bold flex items-center">
                <SiSolidity className="mr-2 text-xl" />
                Solidity
              </span>
              <span className="px-1.5 py-0.5 bg-[#31A8FF] text-white rounded-[3px] font-bold flex items-center">
                <SiAdobephotoshop className="mr-2 text-xl" />
                Photoshop
              </span>
              <span className="px-1.5 py-0.5 bg-[#38BDF8] text-white rounded-[3px] font-bold flex items-center">
                <SiTailwindcss className="mr-2 text-xl" />
                Tailwind CSS
              </span>

            </div>
          </section>

          {/* Social Links Section */}
          <section className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'} p-4 rounded-[3px] transition-colors duration-200`}>
            <div className="flex justify-between items-center">
              <div className="flex space-x-6">
                <a
                  href="https://github.com/y4z1c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-200 flex items-center`}
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/y4z1c1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-200 flex items-center`}
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/1nternSITY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-200 flex items-center`}
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}
                >
                  {theme !== 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                </button>

                <button
                  className="text-2xl rounded-full transition-colors duration-200"
                  onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                >
                  <ReactCountryFlag
                    countryCode={language === 'en' ? 'US' : 'TR'}
                    svg
                    style={{
                      width: '1.2em',
                      height: '1.2em',
                      borderRadius: '10%',
                      objectFit: 'cover',
                      border: `2px solid ${theme === 'dark' ? '#4B5563' : '#374151'}`
                    }}
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
