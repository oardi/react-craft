export const TabsPage = () => {
	const [value, setValue] = useState<string>('tab2');

	const handleChange = (event: any, newValue: string) => {
		setValue(newValue);
	}

	return (
		<div>
			<Tabs
				value={value}
				onChange={handleChange}
			>
				<Tab value="tab1" label="Tab 1" />
				<Tab value="tab2" label="Tab 2" />
				<Tab value="tab3" label={<div className="text-success">Tab 3 with css</div>} />
				<Tab value="tab4" label="Tab 4" disabled />
			</Tabs>

			<TabPanel value={value} index="tab1">
				Tab1 Content
			</TabPanel>
			<TabPanel value={value} index="tab2">
				Tab2 Content
			</TabPanel>
			<TabPanel value={value} index="tab3">
				Tab3 Content
			</TabPanel>
			<TabPanel value={value} index="tab4">
				Tab4 Content should never be displayed
			</TabPanel>
		</div>
	);
}

