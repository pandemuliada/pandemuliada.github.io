import Link from 'next/link'
import Container from './Container'

const Navigation = () => {
  return (
    <nav>
      <Container className="flex py-4">
        <Link href="/">
          <a style={{ fontSize: 22 }}>Pande Muliada</a>
        </Link>

        <div className="sm:ml-auto flex items-center">
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
