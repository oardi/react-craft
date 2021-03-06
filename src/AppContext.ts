import { createContext, Dispatch, useContext } from 'react';
import { IAppInfo } from './app.interfaces';

export interface IAppContext {
	appInfo: IAppInfo;
	setAppInfo: Dispatch<IAppInfo>;
}

export const AppContext = createContext<IAppContext>({
	appInfo: {},
	setAppInfo: () => { }
});
export const useAppContext = () => useContext(AppContext);
