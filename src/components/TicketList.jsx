import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import Moment from 'moment';

function TicketList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return  <Ticket names={ticket.names}
          currentRouterPath={props.currentRouterPath}
          formattedWaitTime={ticket.formattedWaitTime}
          location={ticket.location}
          issue={ticket.issue}
          onTicketSelection={props.onTicketSelection}
          key={ticket.id}
          ticketId={ticket.id}/>
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
