import React from 'react';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import Title from '../generics/Title/index';
import './style.css';

const SolarSystem = () => (
  <section data-testid="solar-system">
    <Title headline="Planetas" />
    <div className="planets">
      {planets.map((planetas) => (
        <PlanetCard
          planetName={ planetas.name }
          planetImage={ planetas.image }
          key={ planetas.key }
        />

      ))}
    </div>
  </section>
);

export default SolarSystem;
