import React, { ReactNode } from 'react';
export interface IExpansionPanelHeaderProps {
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactNode;
    isExpanded: boolean;
}
export declare const ExpansionPanelHeader: (props: IExpansionPanelHeaderProps) => JSX.Element;
