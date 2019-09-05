import React from 'react';
import Header from '../Header';
import Board from '../Boad';
import Check from '../../assets/check.svg'



const Card = (props) => {
    console.log(props);
    const renderedList = props.data.map((data) => {
        console.log(data);
        return (
            <li>
                <div className="timeline-card"><img src={Check} alt="check"/></div>
                <div className="timeline-panel">
                    <Header data={data} />
                    <Board data={data} />
                </div>
            </li>

        );
    });
    return <ul className="timeline">{renderedList}</ul>
}

export default Card;