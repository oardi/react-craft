import React, { Fragment, useEffect } from 'react';
import { IconButton, IIconButtonProps, HomeSolidIcon, FormControl, COLOR, VARIANT, snackbarService, SIZE } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const IconButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconButtonProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			shadow: new FormControl(settingValues.size, [], 'checkbox', { label: 'shadow' }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
			size: new FormControl(settingValues.size, [], 'select', { label: 'size', options: Object.keys(SIZE).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('IconButton clicked');
	}

	return (
		<Fragment>
			<IconButton
				color={settingValues.color}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={<HomeSolidIcon />}
				variant={settingValues.variant}
				size={settingValues.size}
				shadow={settingValues.shadow}
				onClick={handleClick}
			/>
		</Fragment>
	);
}

export const IconButtonPage = withOptions<IIconButtonProps>(IconButtonPageBase, {
	color: COLOR.primary,
	variant: VARIANT.text,
	size: SIZE.md,
}, 'IconButtonPageBase');
