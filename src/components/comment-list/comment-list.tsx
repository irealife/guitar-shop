import React from 'react';
import CommentItem from '../comment-item/comment-item';
import ShowMoreComments from '../show-more-comments/show-more-comments';
import {Comment} from '../../types/comment';

type CommentListProps = {
  comments: Comment[],
  onLoadMoreComments: () => void;
};

function CommentList({comments, onLoadMoreComments}: CommentListProps):JSX.Element {
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <a className="button button--red-border button--big reviews__submit-button" href="#">Оставить отзыв</a>
      {comments.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
        />
      ))}
      <ShowMoreComments onLoadMoreComments={onLoadMoreComments} />
      <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
    </section>
  );
}

export default CommentList;
