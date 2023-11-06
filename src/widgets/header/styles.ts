import styled from 'styled-components'
import '../../app/styles/variables.css'
export const SHeader = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  justify-content: space-between;
  //border: 1px solid var(--color-white);
  @media (max-width: 768px) {
    padding: 16px 16px;
  }
`
export const SLogo = styled.a`
  text-align: center;
  color: var(--color-white);
  font-size: 18px;
  font-style: normal;
  letter-spacing: 7px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  //border: 1px solid var(--color-white);
  margin: auto 0;

  & > span {
    letter-spacing: 9px;
  }
`
export const SButton = styled.button`
  text-align: center;
  color: var(--color-white);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  //border: 1px solid var(--color-white);
  @media (max-width: 768px) {
    display: none;
  }
`
export const SFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
export const SUserMenu = styled.div`
  //width: 55px;
  //height: 55px;
  background-size: cover;
  background-position: center;
`
export const SUserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  //border: 1px solid var(--color-white);
`
