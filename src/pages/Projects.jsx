import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import minesweeper from '../assets/minesweeper.png'
import wicse from '../assets/wicse.png'
import sudoku from '../assets/sudoku.png'
import './Projects.css'


function Projects() {
    return(
        <>
        <div className='project-header' id='projects'>
            <div className='right'>
                <h1>Projects</h1>
            </div>
        </div>

        <div className='Cards'>
            <Card style={{ width: '30vw'}}>
                <Card.Img variant="top" src={minesweeper} style={{height: '150px', width: 'auto'}}/>
                <Card.Body>
                    <Card.Title>Minesweeper</Card.Title>
                    
                    <Card.Subtitle>Example project from Prog2</Card.Subtitle>
                    <Card.Text>
                    Skills: C++, SFML
                    </Card.Text>
                    <Button variant="primary" style={{backgroundColor: '#ced4da'}}>Github Link</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '30vw'}}>
                <Card.Img variant="top" src={wicse} style={{height: '150px', width: 'auto'}}/>
                <Card.Body>
                    <Card.Title>WiCSE Website</Card.Title>
                    
                    <Card.Subtitle>Example project from WiCSE</Card.Subtitle>
                    <Card.Text>
                    Skills: Angular, TypeScript, Firebase
                    </Card.Text>
                    <Button variant="primary" style={{backgroundColor: '#ced4da'}}>Website Link</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '30vw'}}>
                <Card.Img variant="top" src={sudoku} style={{height: '150px', width: 'auto'}}/>
                <Card.Body>
                    <Card.Title>Sudoku</Card.Title>
                    
                    <Card.Subtitle>Example project from Prog1</Card.Subtitle>
                    <Card.Text>
                    Skills: Python, PyGame
                    </Card.Text>
                    <Button variant="primary" style={{backgroundColor: '#ced4da'}}>Replit Link</Button>
                </Card.Body>
            </Card>
        </div>
        </>
  );
}

export default Projects;