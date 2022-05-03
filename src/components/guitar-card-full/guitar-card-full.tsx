import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchSelectedGuitarAction, fetchCommentsAction} from '../../store/api-action';
import {loadMoreComments} from '../../store/action';
import {State} from '../../store/reducer';
import {ThunkAppDispatch} from '../../store/action-type';
import {SHOW_MORE_COMMENTS_STEP} from '../../const';
import RatingStar from '../rating-star/rating-star';
import CommentList from '../comment-list/comment-list';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import NotFound from '../not-found/not-found';
import HeaderScreen from '../header-screen/header-screen';
import FooterScreen from '../footer-screen/footer-screen';

const mapStateToProps = ({guitar, comments, loadedCommentsCount}: State) => ({
  guitar,
  comments: comments.slice(0, loadedCommentsCount),
  loadedCommentsCount,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchSelectedGuitar(id: number) {
    dispatch(fetchSelectedGuitarAction(id));
  },
  fetchComments(id: number) {
    dispatch(fetchCommentsAction(id));
  },
  onLoadMoreCommentsStep(step: number) {
    dispatch(loadMoreComments(step));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux;

function GuitarCardFull({guitar, comments, loadedCommentsCount, fetchSelectedGuitar, fetchComments, onLoadMoreCommentsStep}: ConnectedComponentProps):JSX.Element {

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    fetchSelectedGuitar(Number(id));
  }, [fetchSelectedGuitar, id]);

  useEffect(() => {
    fetchComments(Number(id));
  }, [fetchComments, id]);

  const handleShowMoreCommentsButton = () => {
    onLoadMoreCommentsStep(loadedCommentsCount + SHOW_MORE_COMMENTS_STEP);
  };

  return guitar !== undefined ? (
    <div className="wrapper">
      <HeaderScreen />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <Breadcrumbs />
          <div className="product-container">
            <img className="product-container__img" src={guitar.previewImg} width="90" height="235" alt="" />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
              <div className="rate product-container__rating" aria-hidden="true">
                <RatingStar guitar={guitar} key={guitar.id}/>
              </div>
              <div className="tabs">
                <a className="button button--medium tabs__button" href="#">Характеристики</a>
                <a className="button button--black-border button--medium tabs__button" href="#">Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className="tabs__table">
                    <tbody>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">{guitar.vendorCode}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">{guitar.type}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">{guitar.stringCount} струнная</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="tabs__product-description hidden">{guitar.description}</p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitar.price} ₽</p>
              <a className="button button--red button--big product-container__button" href="#">Добавить в корзину</a>
            </div>
          </div>
          <CommentList comments={comments} onLoadMoreComments={handleShowMoreCommentsButton}/>
        </div>
      </main>
      <footer className="footer">
        <FooterScreen />
      </footer>
    </div>
  ) : <NotFound />;
}

export {GuitarCardFull};
export default connector(GuitarCardFull);
