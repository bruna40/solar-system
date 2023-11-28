import React from 'react';
import MissionCard from '../MissionCard';
import Title from '../generics/Title/index';
import missions from '../../data/missions';
import './style.css';

const Missions = () => (
  <section data-testid="missions">
    <Title headline="Missões" />
    <div className="mission__container">
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
  </section>
);
export default Missions;
