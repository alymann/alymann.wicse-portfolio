import Navbar from './Navbar.jsx'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import './About.css';


const About = () => {
    return (
        <>
        <section className='about-header' id='about'>

            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <p>CSE major at UF.</p> 
                <p>Wicse Webmaster.</p>
                <p>Spring Tech Lead.</p>
            </div>


            {/* <div className='tab-row'>
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className='tab-col'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div className='tab-content'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
                
            </div>
         */}
        </section>
        </>
    );
};

export default About