import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './reducer';
import {changeMenuItem, changeSort, loadSelectedGuitar, loadGuitars, loadComments, redirectToRoute} from './action';

enum ActionType {
  ChangeSort = 'sort/changeSort',
  ChangeMenuItem = 'sort/changeMenuItem',
  LoadSelectedGuitar = 'guitar/loadSelectedGuitar',
  LoadGuitars = 'data/loadGuitars',
  LoadComments = 'data/loadComments',
  RedirectToRoute = 'user/redirectToRoute',
  LoadMoreComments = 'guitar/loadMoreComments',
}

type LoadMoreCommentsAction = {
  type: ActionType.LoadMoreComments,
  payload: number,
}

type Actions =
  | ReturnType<typeof changeSort>
  | ReturnType<typeof changeMenuItem>
  | ReturnType<typeof loadSelectedGuitar>
  | ReturnType<typeof loadGuitars>
  | ReturnType<typeof loadComments>
  | ReturnType<typeof redirectToRoute>
  | LoadMoreCommentsAction;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {
  ActionType
};

export type {
  LoadMoreCommentsAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
