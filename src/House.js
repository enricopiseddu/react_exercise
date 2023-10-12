import React from 'react';
import './House.css';

class House extends React.Component{

    render() {
        return (
            <div className="house">
                <h3>{this.props.title}</h3>

                <p>Superficie {this.props.mq} mq,
                    con {this.props.baths} {this.props.baths > 1 ? 'bagni' : 'bagno'}</p>

                <button className="btn"
                        onClick={()=>this.props.deleteHouse(this.props.id)}>
                    Delete
                </button>
            </div>
        );
    }
}

export default House;