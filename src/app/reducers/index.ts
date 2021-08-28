import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, counterState, COUNTER } from './counter';

export interface State {
  [COUNTER]: counterState
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER]: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
