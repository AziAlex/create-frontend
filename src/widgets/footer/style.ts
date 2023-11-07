import styled from 'styled-components'

export const SFooter = styled.footer`
  display: flex;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px 16px;
  }
`
export const SFooterListNav = styled.ul`
  display: flex;
  gap: 30px;
  margin: auto 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  & > li {
    & > a {
      color: var(--color-white);
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      margin: auto 0;
      position: relative;
    }

    &:first-child > a:before {
      position: absolute;
      content: '';
      bottom: -6px;
      width: 54px;
      height: 3.6px;

      background: linear-gradient(90deg, #eb00ff 0%, #00f0ff 100%);
    }
  }
`
export const SFooterListSocialLinks = styled.ul`
  display: flex;
  flex-direction: column;

  & > li > a > svg:not(& > li:last-child > a > svg) {
    width: 40px;
    height: 40px;
    fill: black;
  }
`
