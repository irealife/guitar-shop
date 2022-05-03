import {ThunkActionResult} from './action-type';
import {loadSelectedGuitar, loadGuitars, loadComments} from './action';
import {APIRoute} from '../const';
import {Guitar} from '../types/guitar';
import {Comment} from '../types/comment';

const fetchGuitarAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Guitar[]>(APIRoute.Guitars);
    data.map((item) => item);
    dispatch(loadGuitars(data));
  };

const fetchSelectedGuitarAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Guitar>(`${APIRoute.Guitars}/${id}`);
    dispatch(loadSelectedGuitar(data));
  };

const fetchCommentsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Guitars}/${id}/comments`);
    data.map((item) => item);
    dispatch(loadComments(data));
  };

// const sendInfoUserAction = (id: number, comment: string): ThunkActionResult =>
//   async (dispatch, _getState, api): Promise<void> => {
//     await api.post<User>(`${APIRoute.Users}/${id}`, {comment});
//     dispatch(redirectToRoute(`${APIRoute.Users}/${id}`));
//   };

export {
  fetchGuitarAction,
  fetchSelectedGuitarAction,
  fetchCommentsAction
};
