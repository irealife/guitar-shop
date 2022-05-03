import React from 'react';
// import {Link} from 'react-router-dom';
import {Comment} from '../../types/comment';
// import RatingStar from '../rating-star/rating-star';

type ReviewItemProp = {
  comment: Comment,
};

function CommentItem({comment}: ReviewItemProp):JSX.Element {
  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{comment.userName}</h4>
        <span className="review__date">{comment.createAt}</span>
      </div>
      <div className="rate review__rating-panel" aria-hidden="true">
        {/*<RatingStar />*/}
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{comment.advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{comment.disadvantage}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment.comment}</p>
    </div>
  );
}

export default CommentItem;
