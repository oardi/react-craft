import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { fileLoaderService, loggerService, Highlight } from '../shared';

export const AboutPage = () => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./pages/about.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="About">
			<Highlight text={markdownText} />
		</Layout>
	)
}
