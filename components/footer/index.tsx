import { StyledFooter } from './style'
import Image from 'next/image'

const Footer = (): React.ReactElement => {
  return (
    <StyledFooter>
      <Image
        src="/symbol.svg"
        alt="Picture of the author"
        width={25}
        height={25}
      />
    </StyledFooter>
  )
}

export default Footer
