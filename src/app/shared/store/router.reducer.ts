import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.util';
import { ActionReducerMap } from '@ngrx/store';

export interface RouterState {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const routerReducers: ActionReducerMap<RouterState> = {
    routerReducer: fromRouter.routerReducer
};