import { StyledFooter, SocialLogo } from './style'
import Image from 'next/image'

const Footer = (): React.ReactElement => {
  return (
    <StyledFooter>
      <SocialLogo>
        <a
          href="https://www.linkedin.com/in/rafaelakiyoshi/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/linkedin.svg"
            alt="Picture of the author"
            width={22}
            height={22}
          />
        </a>
      </SocialLogo>
      <SocialLogo>
        <a
          href="https://github.com/rafaelakiyoshi"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/github.svg"
            alt="Picture of the author"
            width={22}
            height={22}
          />
        </a>
      </SocialLogo>
    </StyledFooter>
  )
}

export default Footer
