import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard';

function FetchData() {
  const [sponsors, setSponsors] = useState([]);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://youngstartup.io/api/cwebsite/get_sponsors", requestOptions);
      const data = await response.json();
      setSponsors(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {sponsors.map((sponsor, i) => (
        <div key={i}>
          {sponsor.values.map((value, j) => (
            <div key={j}>
              <h2>{value.display_name.split(' ')[0]} Partner</h2>
              <img src={value.logo_url} alt={value.display_name} />
              <p>{value.description}</p>
              <button onClick={() => window.location.href=value.website}>Visit website &gt;&gt;</button>
              {value.team_members && (
                <>                  {JSON.parse(value.team_members).map((member, j) => (
      <MemberCard key={member.id} member={member} />
    ))}
</>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FetchData;
