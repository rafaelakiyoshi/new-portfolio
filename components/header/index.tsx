import { StyledHeader, HeaderItem, A, StyledImage } from './style'
import Image from 'next/image'

const Header = (): React.ReactElement => {
  return (
    <StyledHeader>
      <HeaderItem>
        <A
          href="https://www.linkedin.com/in/rafaelakiyoshi/"
          rel="noreferrer"
          target="_blank"
        >
          <StyledImage>
            <Image
              src="/linkedin.svg"
              alt="Picture of the author"
              width={22}
              height={22}
            />
          </StyledImage>
          LinkedIn
        </A>
      </HeaderItem>
      <HeaderItem>
        <A
          href="https://github.com/rafaelakiyoshi"
          rel="noreferrer"
          target="_blank"
        >
          <StyledImage>
            <Image
              src="/github.svg"
              alt="Picture of the author"
              width={22}
              height={22}
            />
          </StyledImage>
          GitHub
        </A>
      </HeaderItem>
    </StyledHeader>
  )
}

export default Header
