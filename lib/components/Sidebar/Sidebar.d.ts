/// <reference types="react" />
import { ISidebarItem } from './sidebar.interfaces';
interface ISidebarProps {
    items: Array<ISidebarItem>;
    currentUrl: string;
    onItemClicked: (path: string) => void;
}
export declare const Sidebar: ({ items, currentUrl, onItemClicked }: ISidebarProps) => JSX.Element;
export {};
