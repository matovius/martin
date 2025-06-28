/**
 * The structure of a project object
 */
export type Project = {
	name: string;
	soundbite?: string;
	description: string;
	year: number;
	url: string;
	icon?: string;
	image?: string;
	isOngoing?: boolean;
	isFeatured?: boolean;
};
