import { IconName } from '../../../shared/interfaces/icon-svg.ts'

export const FOOTER_LINKS = [
  {
    title: 'all portfolio',
    href: '/',
  },
  {
    title: 'news',
    href: '/',
  },
  {
    title: 'about',
    href: '/',
  },
  {
    title: 'contact',
    href: '/',
  },
]

interface ISocialLink {
  name: IconName
  href: string
}

export const FOOTER_SOCIAL_LINKS: ISocialLink[] = [
  {
    name: 'instagram',
    href: '/',
  },
  {
    name: 'vk',
    href: '/',
  },
  {
    name: 'youtube',
    href: '/',
  },
]