import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'

const SLayout = styled.div`
  background-image: url("/pages/main/body-bg.jpg");
  background-size: cover;
  min-height: 100vh;
`

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <SLayout>{children}</SLayout>
}

export default Layout
