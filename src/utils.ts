import { getCollection } from 'astro:content';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const prioritySlugs = [
  'sigap', 
  'lora-roberta',
  'web-risk-content-analyzer',
  'alfajr-elearning',
  'meeting-in', 
  'digiri',
  'seamless-e-wallet',
  'meeting-in',
  'wise',
  'elearning-komputer',
  'multilingual-sa',
  'luarkampus'
];

const sortProjects = (a: any, b: any) => {
  const indexA = prioritySlugs.indexOf(a.slug);
  const indexB = prioritySlugs.indexOf(b.slug);
  
  if (indexA !== -1 && indexB !== -1) {
    return indexA - indexB;
  }
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return b.data.date.valueOf() - a.data.date.valueOf();
};

export const getFeaturedProjects = async () => {
  return (await getCollection("projects"))
    .filter((project: any) => project.data.featured)
    .sort(sortProjects);
};

export const getProjects = async () => {
  return (await getCollection("projects"))
    .sort(sortProjects);
};

export const getBlogPosts = async () => {
  const posts = (await getCollection("blog"))
    .filter((post: any) => post.data.published)
    .sort(
      (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

  return posts;
};
