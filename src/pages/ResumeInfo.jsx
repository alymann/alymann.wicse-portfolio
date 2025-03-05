import React from 'react';
import './Resume.css'

class ResumeInfo extends React.Component {
    render() {
        return(
            <div className="res">
                <h2 className='section'> {this.props.section}</h2>
                {this.props.section!=null ? (<hr/>) : (<></>)}
                <div className='entry'>
                    <div className='title-row'>
                        <p className='title'>{this.props.title}</p> 
                        <p className='date'>{this.props.date}</p>
                    </div>
                    <p className='subtitle'> {this.props.subtitle}</p>
                    <ul>
                        {this.props.descrs.map((element, i) => {
                            let a = element.split(":");
                            if (a.length == 1) {
                                return <li key={i}>{element}</li>;
                            }
                            else {
                                return <li key={i}><strong>{a[0]+":"}</strong>{a[1]}</li>
                            }
                        })}
                    </ul>
                </div>
            </div>
            
        );
    }
     
}

export default ResumeInfo