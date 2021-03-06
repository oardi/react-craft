import { IMenuItem } from './app.interfaces';
import { fileLoaderService } from './shared';

class ShowcaseService {
	loadMenu() {
		return fileLoaderService.get<Array<IMenuItem>>('./menu.json');
	}
}

export const showcaseService = new ShowcaseService();
