import styled from 'styled-components'
import '../../app/styles/variables.css'

export const SFooter = styled.footer`
  display: flex;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  justify-content: space-between;
  border: 1px solid var(--color-white);
  @media (max-width: 768px) {
    padding: 16px 16px;
  }
`
export const SH1 = styled.h1``

export const SUl = styled.ul`
  display: flex;
  width: 100%;
  max-width: 800px;
  gap: 30px;
  border: 1px solid var(--color-white);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const SLi = styled.li``
export const SText = styled.a`
  color: var(--color-white);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  //border: 1px solid var(--color-white);
  margin: auto 0;
`
