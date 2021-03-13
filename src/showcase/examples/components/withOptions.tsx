import React, { Dispatch, useState } from "react";
import { Card, CardBody, CardTitle, Column, IControls, Row } from '../../../lib';
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<T> {
	settingValues: T;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export const withOptions = <T,>(WrappedComponent: any, defaultSettingValues?: T) => {

	const HOC = (props: any) => {
		const [settingValues, setSettingValues] = useState(defaultSettingValues ? defaultSettingValues : {});
		const [settingsControls, setSettingsControls] = useState<any>(null);

		const onFormChange = (val: any) => {
			setSettingValues(val);
		}

		// props passed to WrappedComponent
		return (
			<Row>

				<Column sm={6}>
					<ShowcaseExample>
						<WrappedComponent
							{...props}
							settingValues={settingValues}
							setSettingsControls={setSettingsControls}
						/>
					</ShowcaseExample>

					{settingValues && Object.keys(settingValues).length > 0 &&
						<Card className="mt-3">
							<CardBody>
								<CardTitle>Setted Props</CardTitle>
								<pre>
									{JSON.stringify(settingValues, null, 4)}
								</pre>
							</CardBody>
						</Card>
					}
				</Column>

				{settingsControls && Object.keys(settingsControls).length > 0 &&
					<Column sm={6} className="mt-3 mt-sm-0">
						<ShowcaseOptions
							controls={settingsControls}
							onFormChange={onFormChange}
						/>
					</Column>
				}

			</Row>
		);
	};

	return HOC;
};
