import React from 'react';

const CVComponentForPDF = React.forwardRef(({ data, language }, ref) => (
  <div 
    ref={ref} 
    style={{ 
      fontFamily: 'Arial, sans-serif', 
      color: '#333', 
      background: '#fff', 
      padding: '30px 55px',
      width: '210mm',
      minHeight: '297mm'
    }}
  >
    {/* Header */}
    <div style={{ 
      textAlign: 'center', 
      borderBottom: '2px solid #333', 
      paddingBottom: '15px',
      marginBottom: '18px'
    }}>
      <h1 style={{ 
        fontSize: '46px',
        margin: 0, 
        letterSpacing: '3px',
        fontWeight: 'bold'
      }}>
        {data.name.toUpperCase()}
      </h1>
      <p style={{ 
        fontSize: '19px',
        margin: '6px 0 10px', 
        color: '#555' 
      }}>
        {data.title[language]}
      </p>
      <div style={{ 
        fontSize: '11px',
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <span>{data.email}</span>
        <span>{data.location}</span>
        <span>{data.linkedin}</span>
      </div>
    </div>

    {/* Main Content - 2 Column Layout */}
    <div style={{ 
      display: 'flex', 
      gap: '30px',
      alignItems: 'flex-start'
    }}>
      {/* Left Column - Profile Content + Experience */}
      <div style={{ flex: 2 }}>
        {/* Profile Content */}
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <p style={{ 
            fontSize: '11px',
            lineHeight: 1.4,
            textAlign: 'justify',
            marginBottom: '0'
          }}>
            {data.about.p1[language]} {data.about.p2[language]}
          </p>
        </div>

        {/* Experience Section - TODAS las experiencias */}
        <div>
          <h2 style={{ 
            fontSize: '17px',
            borderBottom: '1px solid #ccc', 
            paddingBottom: '5px',
            marginBottom: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {language === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE'}
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '13px', // Aumentado de 12px a 13px
                fontWeight: 'bold', 
                margin: '0 0 2px 0',
                color: '#2563eb'
              }}>
                {exp.role}
              </h3>
              <p style={{ 
                fontSize: '11px', // Aumentado de 10px a 11px
                fontStyle: 'italic', 
                color: '#555', 
                margin: '0 0 4px 0' 
              }}>
                {exp.company} | {typeof exp.period === 'object' ? exp.period[language] : exp.period}
              </p>
              <div style={{ position: 'relative' }}>
                {exp.description[language].slice(0, 2).map((desc, j) => (
                  <div key={j} style={{ 
                    fontSize: '10px', // Aumentado de 9px a 10px
                    lineHeight: 1.3,
                    marginBottom: '1px',
                    paddingLeft: '12px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0px',
                      top: '2px',
                      fontSize: '9px', // Aumentado de 8px a 9px
                      color: '#333'
                    }}>
                      •
                    </span>
                    {desc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Skills + Certifications + Education */}
      <div style={{ flex: 1 }}>
        {/* Skills */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ 
            fontSize: '17px',
            borderBottom: '1px solid #ccc', 
            paddingBottom: '5px', 
            marginBottom: '9px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {language === 'es' ? 'HABILIDADES' : 'SKILLS'}
          </h2>
          {data.skills.map((skill, i) => (
            <div key={i} style={{ marginBottom: '6px' }}>
              <h4 style={{ 
                fontSize: '11px', // Aumentado de 10px a 11px
                fontWeight: 'bold',
                marginBottom: '1px',
                color: '#333'
              }}>
                {typeof skill.category === 'object' ? skill.category[language] : skill.category}
              </h4>
              <p style={{ 
                fontSize: '9px', // Aumentado de 8px a 9px
                color: '#555',
                lineHeight: 1.2,
                margin: '0'
              }}>
                {skill.items.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications - TODAS las certificaciones */}
        <div style={{ marginBottom: '14px' }}>
          <h2 style={{ 
            fontSize: '17px',
            borderBottom: '1px solid #ccc', 
            paddingBottom: '5px', 
            marginBottom: '9px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {language === 'es' ? 'CERTIFICACIONES' : 'CERTIFICATIONS'}
          </h2>
          {data.certifications.map((cert, i) => (
            <div key={i} style={{ marginBottom: '4px' }}>
              <p style={{ 
                fontSize: '10px', // Aumentado de 9px a 10px
                fontWeight: 'bold',
                margin: '0 0 1px 0',
                lineHeight: 1.2,
                color: '#333'
              }}>
                {cert.name}
              </p>
              <p style={{ 
                fontSize: '9px', // Aumentado de 8px a 9px
                color: '#555',
                margin: '0'
              }}>
                {cert.from}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 style={{ 
            fontSize: '17px',
            borderBottom: '1px solid #ccc', 
            paddingBottom: '5px', 
            marginBottom: '9px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {language === 'es' ? 'EDUCACIÓN' : 'EDUCATION'}
          </h2>
          <div>
            <h3 style={{ 
              fontSize: '11px', // Aumentado de 10px a 11px
              fontWeight: 'bold', 
              margin: '0 0 2px 0',
              color: '#333'
            }}>
              {data.education.degree[language]}
            </h3>
            <p style={{ 
              fontSize: '10px', // Aumentado de 9px a 10px
              color: '#555',
              margin: '0 0 1px 0'
            }}>
              {data.education.institution}
            </p>
            <p style={{ 
              fontSize: '10px', // Aumentado de 9px a 10px
              color: '#555',
              margin: '0'
            }}>
              {data.education.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

CVComponentForPDF.displayName = 'CVComponentForPDF';

export default CVComponentForPDF;