export interface Action<T extends string> {
    type: T;
}

export const HomePageActionType = '[Home Page] Open';

export interface HomePageOpenAction extends Action<typeof HomePageActionType>{}

export const hompePageOpenAction: HomePageOpenAction = {
    type: HomePageActionType
}

export type HomePageAction = HomePageOpenAction;