import { IMenuItem } from '../app.interfaces';
import { ISidebarItem } from '../lib';

export class MenuModel implements ISidebarItem {

	constructor(dto: IMenuItem) {
		this.id = dto.id;
		this.label = dto.label ? dto.label : dto.id;
		this.path = dto.path !== undefined ? dto.path : dto.id;
		this.items = dto.items ? dto.items.map(i => new MenuModel(i)) : [];
		this.isCollapsible = dto.isCollapsible as boolean;
	}

	id: string;
	label: string;
	path: string;
	items: Array<MenuModel>;
	isCollapsible: boolean = false;
}

export class RouteModel {
	constructor(dto: IMenuItem, parentPath?: string) {
		this.path = [parentPath, dto.path !== undefined ? dto.path : dto.id].join("/");
		this.componentKey = `${dto.id}Page`;
		this.routes = dto.items && dto.items.map(item => new RouteModel(item, this.path));
	}

	path: string;
	componentKey: string;
	routes?: Array<RouteModel>;
}
