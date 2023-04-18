import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <img src={member.headshot_url} alt={`${member.firstname} ${member.lastname}`} />
      <div className="member-details">
        <h3>{`${member.firstname} ${member.lastname}`}</h3>
        <p>{member.jobtitle}</p>
        <a href={member.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
