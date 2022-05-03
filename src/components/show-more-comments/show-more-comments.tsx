import React from 'react';

type ShowMoreCommentsProps = {
  onLoadMoreComments: () => void;
};

function ShowMoreComments({onLoadMoreComments}: ShowMoreCommentsProps): JSX.Element {
  return (
    <button className="button button--medium reviews__more-button" onClick={onLoadMoreComments}>Показать еще отзывы</button>
  );
}

export default ShowMoreComments;
