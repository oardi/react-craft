import React from 'react';
import { COLOR, SIZE, VARIANT } from '../component.enums';
import { IconButton } from '../IconButton';
import styles from './FloatingActionButton.module.scss';

export interface IFloatingActionButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: React.SVGProps<SVGSVGElement>;
	color?: COLOR;
	size?: SIZE;
	isActive?: boolean;
	disabled?: boolean;
	onClick?: (e: any) => void;
}

export const FloatingActionButton = (props: IFloatingActionButtonProps) => {

	const { className = '', icon, color = COLOR.primary, size = SIZE.lg, isActive, disabled, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(className);
		cssClasses.push(styles.fab);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

	return (
		<IconButton
			className={getCssClasses()}
			color={color}
			size={size}
			isActive={isActive}
			disabled={disabled}
			icon={icon}
			variant={VARIANT.contained}
			onClick={handleClick}
		/>
	);
};