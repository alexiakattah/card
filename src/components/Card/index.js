import React from 'react';
import Header from '../Header';
import Board from '../Boad';

const Card = (props) => {
    const list = props.data.map((data) => {
        return (
            <li>
                <div className="timeline-badge"><img src="icons/check.svg" alt="check"/></div>
                <div className="timeline-panel">
                    <Header data={data} />
                    <Board data={data} />
                </div>
            </li> 

        );
    });
    return <ul className="timeline">{list}</ul>
}

export default Card;