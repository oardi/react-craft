export interface ISnackbarService {
    show(message: string, timeout?: number): Promise<void>;
}
declare class SnackbarService implements ISnackbarService {
    private container;
    private handler;
    show(message: string, timeout?: number): Promise<void>;
    private hide;
}
export declare const snackbarService: SnackbarService;
export {};
