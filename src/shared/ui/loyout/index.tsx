import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'

const SLayout = styled.div`
  background-image: url(/public/pages/main/body-bg.jpg);
  background-size: cover;
  //background-position: top;
  min-height: 100vh;
`

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <SLayout>{children}</SLayout>
}

export default Layout
