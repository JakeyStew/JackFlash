import rss from '@astrojs/rss';
import { title as SITE_TITLE, description as SITE_DESCRIPTION } from '../config/site.json';

export async function GET(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
	});
}