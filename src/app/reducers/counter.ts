import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export const COUNTER = 'counter'

export const increment = createAction('[Counter] increment')
export const decrement = createAction('[Counter] decrement')
export const reset = createAction('[Counter] reset')

export interface counterState {
    count: number
}

export const initialState: counterState = {
    count: 0
}

export const counterReducer = createReducer(
    initialState,
    on(increment, state=> ({
        ...state,
        count: state.count + 1
    })),
    on(decrement, state=> ({
        ...state,
        count: state.count - 1
    })),
    on(reset, state=> ({
        ...state,
        count: state.count = 0
    }))
)


export const featureSelector = createFeatureSelector<counterState>(COUNTER);
export const countSelector = createSelector(featureSelector, state => state.count); 