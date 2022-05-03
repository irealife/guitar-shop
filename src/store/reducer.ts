import {Actions, ActionType} from './action-type';
import {Guitar} from '../types/guitar';
import {Comment} from '../types/comment';
import {INITIAL_GUITAR_COMMENT_COUNT, Sorts, MenuItems} from '../const';

type State = {
  guitar?: Guitar,
  guitars: Guitar[],
  isDataLoaded: boolean,
  activeSort: Sorts,
  currentMenuItem: MenuItems,
  comments: Comment[],
  loadedCommentsCount: number,
};

const initialState = {
  guitar: undefined,
  guitars: [],
  isDataLoaded: false,
  activeSort: Sorts.byPrice,
  currentMenuItem: MenuItems.catalog,
  comments: [],
  loadedCommentsCount: INITIAL_GUITAR_COMMENT_COUNT,
};

function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.ChangeMenuItem:
      return {...state, currentMenuItem: action.payload as MenuItems};
    case ActionType.ChangeSort:
      return {...state, activeSort: action.payload as Sorts};
    case ActionType.LoadSelectedGuitar:
      return {...state, guitar: action.payload as Guitar};
    case ActionType.LoadGuitars:
      return {...state, guitars: action.payload as Guitar[]};
    case ActionType.LoadComments:
      return {...state, comments: action.payload as Comment[]};
    case ActionType.LoadMoreComments:
      return {...state, loadedCommentsCount: action.payload as number};
    default:
      return {...state};
  }
}

export type {
  State
};

export {
  initialState,
  reducer
};
