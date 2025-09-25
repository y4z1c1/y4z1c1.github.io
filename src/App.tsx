import './index.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase, FaTools, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { DiPython, DiJava, DiHtml5, DiReact, DiJavascript1 } from "react-icons/di";
import { SiCplusplus, SiTypescript, SiSui, SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiTailwindcss, SiSolidity, SiUnity, SiDotnet, SiDjango, SiMysql } from "react-icons/si";
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';
import { useTranslation } from './hooks/useTranslation';

const App = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();


  return (
    <main>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: 'calc(var(--line-height) * 2)'
      }}>
        <tbody>
          <tr>
            <td colSpan={2} rowSpan={2} style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'auto'
            }}>
              <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>yusuf anıl yazıcı</h1>
              <span style={{ fontSize: '1rem' }}>computer engineer</span>
            </td>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              <FaMapMarkerAlt /> Location
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content'
            }}>
              {t('location')}
            </td>
          </tr>
          <tr>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              <FaPhone /> Phone
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content'
            }}>
              +90 501 061 89 75
            </td>
          </tr>
          <tr>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              <FaEnvelope /> Email
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'auto'
            }}>
              <a href="mailto:yusufanilyazici@gmail.com">yusufanilyazici@gmail.com</a>
            </td>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              <FaGithub /> GitHub
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content'
            }}>
              <a href="https://github.com/y4z1c1" target="_blank" rel="noopener noreferrer">y4z1c1</a>
            </td>
          </tr>
          <tr>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              <FaLinkedin /> LinkedIn
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'auto'
            }}>
              <a href="https://www.linkedin.com/in/y4z1c1/" target="_blank" rel="noopener noreferrer">y4z1c1</a>
            </td>
            <th style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content',
              textAlign: 'left'
            }}>
              CV
            </th>
            <td style={{ 
              padding: '0.5rem', 
              border: 'var(--border-thickness) solid var(--text-color)',
              width: 'min-content'
            }}>
              <a 
                href="/resume-yusuf-anil-yazici.pdf" 
                download="yusuf-anil-yazici-cv.pdf"
                style={{ 
                  textDecoration: 'underline',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <FaDownload /> Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <section>
        <h2><FaGraduationCap /> {t('education')}</h2>
        <ul>
          <li>
                <strong>{t('currentEducation')}</strong> (2021 - 2026)
              </li>
          <li>
            {t('previousEducation')} (2017 - 2021)
          </li>
            </ul>
          </section>

      <section style={{
        borderTop: 'var(--border-thickness) solid var(--text-color)',
        paddingTop: 'calc(var(--line-height) * 1.5)',
        marginTop: 'calc(var(--line-height) * 1.5)'
      }}>
        <h2><FaBriefcase /> {t('experience')}</h2>
        
        <article>
          <h3>
            {t('riskOptimaRole')}
          </h3>
          <time>{t('riskOptimaDate')}</time>
          <p>{t('riskOptimaDescription')}</p>
        </article>

        <article>
          <h3>
            {t('suiCityRole')}
          </h3>
          <time>{t('suiCityDate')}</time>
          <p>{t('suiCityDescription')}</p>
        </article>

        <article>
          <h3>{t('freelanceRole')}</h3>
          <time>{t('freelanceDate')}</time>
          <p>{t('freelanceDescription')}</p>
        </article>
          </section>

      <section style={{
        borderTop: 'var(--border-thickness) solid var(--text-color)',
        paddingTop: 'calc(var(--line-height) * 1.5)',
        marginTop: 'calc(var(--line-height) * 1.5)'
      }}>
        <h2><FaTools /> {t('skills')}</h2>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: 'var(--line-height)'
        }}>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <DiPython /> python
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <DiJava /> java
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiCplusplus /> c/c++
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <DiHtml5 /> html/css
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <DiJavascript1 /> javascript
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiTypescript /> typescript
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <DiReact /> react
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiSui /> move
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiAdobepremierepro /> premiere pro
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiAdobeaftereffects /> after effects
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiSolidity /> solidity
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiAdobephotoshop /> photoshop
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiTailwindcss /> tailwind css
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiUnity /> unity
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiDotnet /> c#
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiDjango /> django
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                <SiMysql /> mysql
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                
              </td>
              <td style={{ padding: '0.5rem', border: 'var(--border-thickness) solid var(--text-color)' }}>
                
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer style={{ 
        marginTop: 'calc(var(--line-height) * 2)', 
        textAlign: 'center',
        borderTop: 'var(--border-thickness) solid var(--text-color)',
        paddingTop: 'var(--line-height)'
      }}>
        <button 
          onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
          title="Switch language"
          style={{
            border: 'var(--border-thickness) solid var(--text-color)',
            background: 'var(--background-color)',
            color: 'var(--text-color)',
            padding: '0.25rem 0.5rem',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            cursor: 'pointer'
          }}
        >
          {language === 'en' ? 'türkçe' : 'english'}
        </button>
      </footer>
    </main>
  );
};

export default App;