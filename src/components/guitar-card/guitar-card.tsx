import React from 'react';
import {Link} from 'react-router-dom';
import {Guitar} from '../../types/guitar';
import RatingStar from '../rating-star/rating-star';

type GuitarCardProps = {
  guitar: Guitar,
  onMouseEnter: (guitarId: number) => void,
}

function GuitarCard({guitar, onMouseEnter}:GuitarCardProps):JSX.Element {

  const handleMouseEnter = () => {
    onMouseEnter(guitar.id);
  };

  return (
    <div className="product-card"
      onMouseEnter={handleMouseEnter}
      id={String(guitar.id)}
    >
      <img src={guitar.previewImg} width="75" height="190" alt={guitar.name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <RatingStar guitar={guitar} key={guitar.id}/>
        </div>
        <p className="product-card__title">{guitar.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{guitar.price} ₽</p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/guitars/${guitar.id}`}>Подробнее</Link>
        <a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </div>
  );
}

export default GuitarCard;
