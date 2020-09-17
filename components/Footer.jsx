import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'
import Container from './Container'

const accounts = [
  {
    link: 'https://t.me/pandemuliada',
    icon: <FaTelegram fontSize={22} />,
  },
  {
    link: 'https://www.instagram.com/pandemuliada/',
    icon: <FaInstagram fontSize={22} />,
  },
  {
    link: 'https://twitter.com/pandemuliada/',
    icon: <FaTwitter fontSize={22} />,
  },
  {
    link: 'https://dribbble.com/pandemuliada',
    icon: <FaDribbble fontSize={22} />,
  },
  {
    link: 'https://github.com/pandemuliada',
    icon: <FaGithub fontSize={22} />,
  },
  {
    link: 'https://www.linkedin.com/in/pandemuliada/',
    icon: <FaLinkedin fontSize={22} />,
  },
]

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#efefef' }} className="py-5">
      <Container className="flex flex-wrap items-center justify-center">
        {accounts.map(({ link, icon }, index) => (
          <a
            key={link}
            href={link}
            target="_blank"
            className="inline-block mx-4 my-2 text-gray"
          >
            {icon}
          </a>
        ))}
      </Container>
    </footer>
  )
}

export default Footer
