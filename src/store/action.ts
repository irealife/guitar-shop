import {ActionType, LoadMoreCommentsAction} from './action-type';
import {Guitar} from '../types/guitar';
import {Comment} from '../types/comment';
import {MenuItems, Sorts} from '../const';

type Action<T> = {
  type: string,
  payload: T,
}

function changeMenuItem(item: MenuItems): Action<MenuItems> {
  return ({
    type: ActionType.ChangeMenuItem,
    payload: item,
  }) as const;
}

function changeSort(sort: Sorts): Action<Sorts> {
  return ({
    type: ActionType.ChangeSort,
    payload: sort,
  }) as const;
}

function loadSelectedGuitar(product: Guitar): Action<Guitar> {
  return ({
    type: ActionType.LoadSelectedGuitar,
    payload: product,
  }) as const;
}

function loadGuitars(products: Guitar[]): Action<Guitar[]> {
  return ({
    type: ActionType.LoadGuitars,
    payload: products,
  }) as const;
}

function loadComments(comments: Comment[]): Action<Comment[]> {
  return ({
    type: ActionType.LoadComments,
    payload: comments,
  }) as const;
}

function loadMoreComments(step: number): LoadMoreCommentsAction {
  return ({
    type: ActionType.LoadMoreComments,
    payload: step,
  }) as const;
}

function redirectToRoute(url: string): Action<string> {
  return ({
    type: ActionType.RedirectToRoute,
    payload: url,
  }) as const;
}

export {
  changeMenuItem,
  changeSort,
  loadSelectedGuitar,
  loadGuitars,
  loadComments,
  loadMoreComments,
  redirectToRoute
};
