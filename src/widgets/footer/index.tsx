import { SFooter, SLi, SText, SUl } from './style.ts'

const Index = () => {
  return (
    <SFooter>
      <SUl>
        <SLi>
          <SText href="/">all portfolio</SText>
        </SLi>
        <SLi>
          <SText href="/">news</SText>
        </SLi>
        <SLi>
          <SText href="/">about</SText>
        </SLi>
        <SLi>
          <SText href="/">contact</SText>
        </SLi>
      </SUl>
    </SFooter>
  )
}

export default Index
