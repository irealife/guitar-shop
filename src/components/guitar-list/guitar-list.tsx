import React, {useState} from 'react';
import GuitarCard from '../guitar-card/guitar-card';
import {Guitar} from '../../types/guitar';
import {MAX_GUITAR_COUNT} from '../../const';

type GuitarListProps = {
  guitars: Guitar[],
}

function GuitarList({guitars}:GuitarListProps):JSX.Element {

  const [, setCurrentGuitar] = useState(0);
  const handleGuitarCardMouseEnter = (guitarId: number) => {
    setCurrentGuitar(guitarId);
  };

  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => (
        <GuitarCard
          guitar={guitar}
          key={guitar.id}
          onMouseEnter={handleGuitarCardMouseEnter}
        />
      )).slice(0, MAX_GUITAR_COUNT)}
    </div>
  );
}

export default GuitarList;
