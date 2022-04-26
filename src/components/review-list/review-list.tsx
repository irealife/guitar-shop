import React from 'react';
import ReviewItem from '../review-item/review-item';

function ReviewList():JSX.Element {
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <a className="button button--red-border button--big reviews__submit-button" href="#">Оставить отзыв</a>
      <ReviewItem />
      <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
      <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
    </section>
  );
}

export default ReviewList;
