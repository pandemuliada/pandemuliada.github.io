import Link from 'next/link'
import Container from './Container'

const Navigation = () => {
  return (
    <nav>
      <Container className="flex py-4">
        <Link href="/">
          <a style={{ fontSize: 22 }}>
            <span className="hidden sm:block">Pande Muliada</span>
            <span className="block sm:hidden">PM</span>
          </a>
        </Link>

        <div className="ml-auto flex items-center">
          <a
            href="https://pandemuliada.netlify.app"
            target="_blank"
            className="ml-10 text-gray hover:text-primary cursor-pointer"
          >
            Blog
          </a>
          <Link href="mailto:pandemuliada@gmail.com">
            <a className="ml-10 text-gray hover:text-primary cursor-pointer">
              Contact
            </a>
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation
