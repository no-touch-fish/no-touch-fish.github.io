import { template } from '../settings'

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}

export function getTagUrl(tag: string): string {
	return `${template.base}/blog/tags/${encodeURIComponent(tag)}`
}
