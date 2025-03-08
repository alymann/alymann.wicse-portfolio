import Navbar from './Navbar.jsx'
import ResumeInfo from './ResumeInfo.jsx'
import resume from '../assets/Resume.pdf'

import './Resume.css'

const Resume = () => {
    return(
        <>
        <nav>
            <Navbar />
        </nav>

        <section id='Resume'>
            <div style={{textAlign: 'center'}}>
                <h1 style={{paddingBottom: '0'}}>Resume</h1>
                <a href={resume} download={'AlyssaMann_Resume'} target='blank'>
                    <button type='download' 
                        style={{
                            backgroundColor: '#de87c1', 
                            color: 'white', 
                            borderRadius: '6px'
                        }}>
                        Download Resume
                    </button>
                </a>
            </div>
          
            <ResumeInfo 
                section={'Education'}
                title={'Bachelor of Science in Computer Science'}
                date={'May 2026'}
                subtitle={'University of Florida, Gainesville, FL'}
                descrs={[
                    'GPA: 3.5 / 4.0',
                    'Relevent Coursework: Operating Systems, Programming Language Concepts, Data Structures & Algorithms, Object Oriented Programming, Cross-Cultural Engineering & Design, Performant Programming, AI Fundamentals',
                    'Involvement: Women in Computer Science and Engineering (WiCSE), Colorstack, WiNGHacks',
                    'Honors: Bright Futures Scholarship, Dean’s List'
                ]}
            />
            <ResumeInfo 
                title={'Associate in Arts'}
                date={'May 2022'}
                subtitle={'Palm Beach State College, Loxahatchee, FL'}
                descrs={[
                    'Relevent Coursework:  Calculus w/ Analytic Geometry (2 & 3), Microcomputer Applications, Introduction to Programming, Physics w/ Calculus (1 & 2)',
                    'Involvement: Math Club',
                    'Honors: Dean’s List'
                ]}
            />
            <ResumeInfo 
                section={'Experience'}
                title={'UF in Japan - Cross Cultural Engineering & Design'}
                date={'Summer 2024'}
                subtitle={'Kyoto University, Kyoto, Japan'}
                descrs={[
                    'Engaged in a comprehensive study abroad program focused on cross-cultural engineering and design principles.',
                    'Developed a game that prioritizes performance, utilizing multithreading for file I/O resulting in a 94% speedup.',
                    'Collaborated with Japanese graduate students and faculty on engineering, design, platform science, and programming projects.'
                ]}
            />
        </section>
        </>
    )
}

export default Resume;