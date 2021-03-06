import React, { ReactNode } from 'react';

interface IRowProps {
	children?: ReactNode;
	className?: string;
}

export const Row = (props: IRowProps) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('row');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	)
}
