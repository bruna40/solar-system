import React from 'react';
import MissionCard from './MissionCard';
import Title from './generics/Title/index';
import missions from '../data/missions';

const Missions = () => (
  <div data-testid="missions">
    <Title headline="Missões" />
    {missions.map((mission) => (
      <MissionCard
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
        key={ mission.key }
      />
    ))}
  </div>
);
export default Missions;
