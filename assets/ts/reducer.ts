import { HomePageState, initialState } from './state';
import { HomePageAction, HomePageActionType } from './action';

export function homePageReducer(
    state = initialState,
    action: HomePageAction
): HomePageState {
    switch(action.type) {
        case HomePageActionType: {
            return { 
                news: [
                    {
                        id: 1,
                        topic: 'Ref App',
                        content: 'Presentation is in progress'
                    }
                ]
            }
        }
        default: return state
    }
}
