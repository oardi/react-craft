import React, { Dispatch, useState } from "react";
import { Card, CardBody, CardTitle, IControls } from '../../../lib';
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<T> {
	settingValues: T;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export const withOptions = <T,>(WrappedComponent, defaultSettingValues?: T) => {

	const HOC = (props) => {
		const [settingValues, setSettingValues] = useState(defaultSettingValues ? defaultSettingValues : {});
		const [settingsControls, setSettingsControls] = useState(null);

		const onFormChange = (val) => {
			setSettingValues(val);
		}

		// props passed to WrappedComponent
		return (
			<div className="row">

				<div className="col-12 col-sm-6">
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
				</div>

				{settingsControls && Object.keys(settingsControls).length > 0 &&
					<div className="col-12 col-sm-6 mt-3 mt-sm-0">
						<ShowcaseOptions
							controls={settingsControls}
							onFormChange={onFormChange}
						/>
					</div>
				}

			</div>
		);
	};

	return HOC;
};