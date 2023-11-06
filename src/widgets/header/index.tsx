import { SButton, SFlexWrapper, SHeader, SLogo, SUserImage, SUserMenu } from './styles.ts'

const Index = () => {
  return (
    <SHeader>
      <SLogo href="/">
        portfolio <br />
        <span>template</span>
      </SLogo>
      <SFlexWrapper>
        <SButton>create portfolio</SButton>
        <SUserMenu>
          <SUserImage src={'/pages/main/logo.png'} alt="" />
        </SUserMenu>
      </SFlexWrapper>
    </SHeader>
  )
}

export default Index
