import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import Moment from 'moment';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}/>
      )}
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}


TicketList.propTypes = {
  names: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   issue: PropTypes.string,
   timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default TicketList;
