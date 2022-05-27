import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

const SolarSystem = () => (
  <div data-testid="solar-system">
    <Title headline="Planetas" />
    {planets.map((planetas) => (
      <PlanetCard
        planetName={ planetas.name }
        planetImage={ planetas.image }
        key={ planetas.key }
      />
    ))}
  </div>
);

export default SolarSystem;
