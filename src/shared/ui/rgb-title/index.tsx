import { FC } from 'react'
import styled from 'styled-components'



const SRgbTitle = styled.span`
  background: linear-gradient(90deg, var(--color-blue-light) 0%, var(--color-punk) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 80px;
  font-weight: 700;
`
const RgbTitle: FC<{ title: string }> = ({ title }) => <SRgbTitle>{title}</SRgbTitle>


export default RgbTitle