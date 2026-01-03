import rss from '@astrojs/rss';
import { title as SITE_TITLE, description as SITE_DESCRIPTION } from '../config/site.json';

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      {
        title: 'Welcome to my RSS feed', // REQUIRED
        description: SITE_DESCRIPTION,    // optional but recommended
        pubDate: new Date().toISOString(), // optional but recommended
        link: '/',                        // optional but recommended
      }
    ]
  });
}

/* Potential fix for PagesCMS *

import rss from '@astrojs/rss';
import { title as SITE_TITLE, description as SITE_DESCRIPTION } from '../config/site.json';
import posts from '../config/posts.json'; // replace with your CMS collection if different

export async function GET(context) {
  // Map posts to RSS items
  const items = posts
    .filter(post => post.title) // skip any items without a title
    .map(post => ({
      title: post.title, // REQUIRED
      description: post.description ?? '', // optional, fallback empty string
      pubDate: post.pubDate ?? new Date().toISOString(), // optional, fallback to now
      link: post.slug ? `/blog/${post.slug}` : '/', // fallback to homepage
    }));

  // If there are no posts, provide a fallback item so RSS still builds
  if (items.length === 0) {
    items.push({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      pubDate: new Date().toISOString(),
      link: '/',
    });
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site, // automatically pulled from your Astro config
    items,
  });
}
*/