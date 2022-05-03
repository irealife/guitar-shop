import React from 'react';
import {Guitar} from '../../types/guitar';

type RatingStarProp = {
  guitar: Guitar,
}

function RatingStar({guitar}: RatingStarProp):JSX.Element {
  //product-card__rate = 12
  //product-container__rating = 14
  //review__rating-panel = 16
  return (
    <>
      <span className="visually-hidden">Рейтинг:</span>
      <svg width="12" height="11" aria-hidden="true"><use xlinkHref="#icon-full-star"></use></svg>
      <svg width="12" height="11" aria-hidden="true"><use xlinkHref="#icon-full-star"></use></svg>
      <svg width="12" height="11" aria-hidden="true"><use xlinkHref="#icon-full-star"></use></svg>
      <svg width="12" height="11" aria-hidden="true"><use xlinkHref="#icon-full-star"></use></svg>
      <svg width="12" height="11" aria-hidden="true"><use xlinkHref="#icon-star"></use></svg>
      <span className="rate__count">{guitar.rating}</span><span className="rate__message"></span>
    </>
  );
}

export default RatingStar;
