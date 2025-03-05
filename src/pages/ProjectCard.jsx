import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './Projects.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class ProjectCard extends React.Component {
    render() {//title, descr, img, skills, link, link_descr
        return(
            <div className='tempCard'>
                <Card style={{width: '25vw'}} >
                    <Card.Img variant="top" src={this.props.img} className="cardImg"/>
                    <Card.Body >
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.descr}</Card.Text>
                        <a href={this.props.link}>
                            <Button variant="primary" 
                            style={{backgroundColor: '#de87c1', 
                            border: 'none'}}>{this.props.link_descr}
                            </Button>
                        </a>
                    </Card.Body>
                    <Card.Footer>
                        Skills: {this.props.skills}
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default ProjectCard



