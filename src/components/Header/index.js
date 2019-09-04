import React from 'react';
import Moment from 'moment';

const Header = (props) => {
    const dateToFormat = props.data.created_on;
    return (
        <div className="timeline-heading">
            <div className="timeline-title">
                <img src="icons/calendar.svg" alt="calendar" />
                <Moment format="MM/DD/YYYY" date={dateToFormat} />
            </div>
            <div className="timeline-title">
                <img src="icons/clock.svg" alt="clock" />
                <Moment format="HH:mm" date={dateToFormat} />
            </div>
            <div className="timeline-title">
                <img src="icons/place.svg" alt="place" />
                {props.data.store_name}
            </div>
            <div className="timeline-title">
                <img src="icons/money.svg" alt="money" />
                R${props.data.total_price}
            </div>
        </div>
    );
}

export default Header;