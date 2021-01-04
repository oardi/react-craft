import React, { Fragment, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { List, ListItem, ListItemAvatar, homeSolidSvg, ListItemAction, IconButton, DropDown, DropDownItem, DropDownMenu, ListItemText } from '../../lib';
import { withOptions } from './components';

export const ShowcaseListBase = () => {

	const { loggerService } = useContext(AppContext);

	const handleClickItem = () => {
		loggerService.debug('handleClick item');
	}

	const handleClickDropDownItem = () => {
		loggerService.warn('handleClick dropDownItem in showcase');
	}

	return (
		<Fragment>
			<List>
				<ListItem onClick={handleClickItem}>
					<ListItemAvatar avatar={homeSolidSvg} />

					<ListItemText>lorem ipsum</ListItemText>

					<ListItemAction>
						<DropDown
							toggle={<IconButton icon={homeSolidSvg} />}
							menu={
								<DropDownMenu
									items={[
										<DropDownItem onClick={handleClickDropDownItem}>
											test 1
										</DropDownItem>,
										<DropDownItem onClick={handleClickDropDownItem}>
											test 2
										</DropDownItem>
									]}
									menuPosition="right"
								/>
							}
						/>
					</ListItemAction>
				</ListItem>
			</List>
		</Fragment>
	);
}

export const ShowcaseList = withOptions(ShowcaseListBase);
