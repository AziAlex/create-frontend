import { SFooter, SFooterListNav, SFooterListSocialLinks } from './style.ts'
import RgbTitle from '../../shared/ui/rgb-title'
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from './lib/constants.ts'
import Icon from '../../shared/svg'

const Footer = () => (
  <SFooter>
    <RgbTitle title="CREATE" />
    <SFooterListNav>
      {FOOTER_LINKS.map(({ title, href }, index) => (
        <li key={index}>
          <a href={href}>{title}</a>
        </li>
      ))}
    </SFooterListNav>
    <SFooterListSocialLinks>
      {FOOTER_SOCIAL_LINKS.map(({ name, href }, index) => (
        <li key={index}>
          <a href={href}>
            <Icon name={name} />
          </a>
        </li>
      ))}
    </SFooterListSocialLinks>
  </SFooter>
)

export default Footer
