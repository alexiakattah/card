import React from 'react';
import Moment from 'react-moment';
import Calendar from '../../assets/calendar.svg'

import clock from '../../assets/clock.svg'
import money from '../../assets/money.svg'
import place from '../../assets/place.svg'

const Header = (props) => {
    const dateToFormat = props.data.created_on;
    return (
        <div className="timeline-header">
            <li className="timeline-title">
                <img src={Calendar} alt="" />
                <Moment format="MM/DD/YYYY" date={dateToFormat} />
            </li>
            <li className="timeline-title">
                <img src={clock} alt="" />
                <Moment format="HH:mm" date={dateToFormat} />
            </li>
            <li className="timeline-title">
                <img src={place} alt="" />
                {props.data.store_name}
            </li>
            <li className="timeline-title">
                <img src={money} alt="" />
                R${props.data.total_price}
            </li>
        </div>
    );
}

export default Header;