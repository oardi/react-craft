/// <reference types="react" />
import { IFormInputOptions, IFormTextAreaOptions, IFormSelectOptions } from './form.interfaces';
import { IFormControlType } from './form.types';
export interface IFormInputProps {
    value: any;
    name: string;
    type: IFormControlType;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    isValid?: boolean;
    autoFocus?: boolean;
    options?: Array<IFormInputOptions>;
    textareaOptions?: IFormTextAreaOptions;
    selectOptions?: IFormSelectOptions;
    label?: string;
    onChange?: (name: string, value: any, type: string) => void;
    onBlur?: (event: any) => void;
    onKeyDown?: (event: any) => void;
}
export declare const FormInput: (props: IFormInputProps) => JSX.Element;
