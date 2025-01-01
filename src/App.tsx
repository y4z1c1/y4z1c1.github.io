import './index.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase, FaTools, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { DiPython, DiJava, DiHtml5, DiReact, DiJavascript1 } from "react-icons/di";
import { SiCplusplus, SiTypescript, SiSui, SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiTailwindcss } from "react-icons/si";

const App = () => {
  return (
    <div className="min-h-screen bg-darkbg text-darktext flex justify-center items-center">
      <div className="w-[90%] md:w-[70%] lg:w-[40%] max-w-4xl space-y-4">

        {/* Header */}
        <header className="bg-darkdiv p-3 rounded-[3px] ">
          <div className='flex flex-col items-center space-y-4'>

            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="avatar h-8 w-8 bg-gray-600 rounded-full overflow-hidden">
                <img src="pp.jpg" alt="Profile" />
              </div>
              <h1 className="text-3xl font-bold">Yusuf Anıl Yazıcı</h1>
            </div>

            <div className='text-center text-gray-400 flex items-center justify-center space-x-4'>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Sariyer, Istanbul
              </span>
              <span className="flex items-center">
                <FaPhone className="mr-2" />
                +90 553 849 59 61
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:yusufanilyazici@gmail.com" className="text-blue-400 hover:text-blue-200 transition-colors">
                  yusufanilyazici@gmail.com
                </a>
              </span>
            </div>
          </div>

        </header>

        {/* Education Section */}
        <section className="bg-darkdiv p-4 rounded-[3px] ">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaGraduationCap className="mr-2" />
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Boğaziçi University, Computer Engineering</strong> (2021 - 2026)
            </li>
            <li>Sakarya Cevat Ayhan Science High School (2017 - 2021)</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="bg-darkdiv p-4 rounded-[3px] ">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2" />
            Experience
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>
                <a href="https://suicityp2e.com" target="_blank" rel="noopener noreferrer" className='mr-1'>
                  Blockchain Developer, SuiCityP2E
                </a>
              </strong>(Aug 2024 - Present)
              <p className="text-gray-400 mt-2">
                Led the development of SuiCityP2E, a play-to-earn blockchain game with engaging gameplay and seamless user experience. Designed a rewards system for earning and upgrading in-game assets, boosting player engagement. Developed secure smart contracts for game mechanics and reliable player transactions. Built a user-friendly web application for asset management and reward claiming. Ensured scalability and stability to support high player activity and transaction volumes.
              </p>
            </li>
            <li>
              <strong>Freelance Fullstack Developer</strong> (Sep 2022 - May 2024)
              <p className="text-gray-400 mt-2">
                Developed frontends and backends for several blockchain NFT projects' websites. Created NFT minting dApps with seamless user experiences. Implemented secure smart contracts for NFT minting and transactions. Ensured responsive design and cross-browser compatibility. Collaborated with clients to deliver high-quality, scalable solutions.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="bg-darkdiv p-6 rounded-[3px] overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaTools className="mr-2" />
            Skills
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
        <section className="bg-darkdiv p-3 rounded-[3px] shadow-shadow-blur">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yusufanilyazici"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-an%C4%B1l-yaz%C4%B1c%C4%B1-342672218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/1nternSITY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
