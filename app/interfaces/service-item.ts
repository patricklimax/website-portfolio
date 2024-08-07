import type { ElementType } from 'react';

export interface Service {
	name: string;
	description: string;
	moreInfo: string;
	icon: ElementType;
	color: string;
}
