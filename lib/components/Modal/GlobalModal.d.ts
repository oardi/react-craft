import { ReactElement } from 'react';
import { IControls, IFormValues } from '../Form';
import { MODALTYPE } from './modal.enum';
import { IModalButton } from './modal.interfaces';
interface IModalProps {
    title?: string;
    description?: string | ReactElement;
    formControls?: IControls;
    modalType?: MODALTYPE;
    onOk?: (values?: IFormValues) => void;
    onCancel?: () => void;
    isDismissable?: boolean;
    buttons?: Array<IModalButton>;
    fullScreen?: boolean;
}
export declare const GlobalModal: ({ title, description, formControls, onOk, onCancel, isDismissable, buttons, fullScreen }: IModalProps) => JSX.Element;
export {};
