import React, { cloneElement, Fragment, ReactElement, useEffect, useState } from 'react';
import { ITabProps } from './Tab';
import { TabModel, TabNavModel } from './tab.models';
import { TabNav } from './TabNav';

export interface ITabsetProps {
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fill?: boolean;
	onTabSelect?: (eventKey: string) => void;
	selectedEventKey?: string;
}

export const Tabset = (props: ITabsetProps) => {

	const { children, className = '', fill, onTabSelect, selectedEventKey } = props;

	const [_selectedEventKey, setSelectedEventKey] = useState(selectedEventKey);
	const [navs, setNavs] = useState<Array<TabNavModel>>([]);
	const [tabs, setTabs] = useState<Array<TabModel>>([]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push("nav nav-tabs tabset");
		cssClasses.push(className);
		if (fill) cssClasses.push('nav-fill');
		return cssClasses.filter(css => css).join(' ');
	};

	useEffect(() => {
		if (children) {
			if (Array.isArray(children)) {
				setTabs(children.map(child => new TabModel(child)));
				setNavs(children.map(child => new TabNavModel(child)));
			} else {
				setTabs([new TabModel(children)]);
				setNavs([new TabNavModel(children)]);
			}
		}
	}, [children]);

	useEffect(() => {
		if (tabs && tabs.length > 0) {
			const activeTab = tabs.find(tab => tab.props?.eventKey === _selectedEventKey);
			if (activeTab) {
				setSelectedEventKey(activeTab.props?.eventKey);
			} else {
				setSelectedEventKey(tabs[0].props?.eventKey);
			}
		}
	}, [tabs]);

	const handleClickTab = (eventKey: string) => {
		setSelectedEventKey(eventKey);
		onTabSelect && onTabSelect(eventKey);
	}

	return (
		navs && tabs &&
		<Fragment>
			<ul className={getCssClasses()}>
				{navs.map(nav => (
					<TabNav
						key={nav.eventKey}
						eventKey={nav.eventKey}
						isActive={nav.eventKey === _selectedEventKey}
						disabled={nav.disabled}
						onClick={(eventKey) => handleClickTab(eventKey)}
					>
						{nav.title}
					</TabNav>
				))}
			</ul>

			<div className="tab-content">
				{tabs.map((tab) => (
					cloneElement(tab, {
						isActive: tab.props?.eventKey === _selectedEventKey,
						key: tab.props?.eventKey
					})
				))}
			</div>
		</Fragment>
	)
}
