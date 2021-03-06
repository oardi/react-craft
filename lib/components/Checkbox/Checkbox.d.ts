import React from 'react';
import { HtmlBaseProps } from '../component.interfaces';
export interface ICheckboxProps extends HtmlBaseProps {
    id?: string;
    name?: string;
    className?: string;
    checked?: boolean;
    label?: string;
    value?: string;
    onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
}
export declare const Checkbox: (props: ICheckboxProps) => JSX.Element;
