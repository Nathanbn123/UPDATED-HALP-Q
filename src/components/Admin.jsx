import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin(props){
  let ticketDetailDisplay = null;
  if (props.selectedTicket !== null) {
    ticketDetailDisplay = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
        {ticketDetailDisplay}
        <TicketList
           ticketList={props.ticketList}
           currentRouterPath={props.currentRouterPath}
           onTicketSelection={props.onTicketSelection}
           />
    </div>
  );
}

Admin.propTypes = {
   ticketList: PropTypes.object,
   currentRouterPath: PropTypes.string.isRequired,
   onTicketSelection: PropTypes.func.isRequired,
   selectedTicket: PropTypes.string
};

export default Admin;
