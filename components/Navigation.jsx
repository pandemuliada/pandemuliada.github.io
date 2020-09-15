import Link from 'next/link'
import Container from './Container'

const Navigation = () => {
  return (
    <nav>
      <Container className="md:flex py-4">
        <Link href="/">
          <a style={{ fontSize: 22 }}>Pande Muliada</a>
        </Link>

        <div className="ml-auto flex items-center">
          <a
            href="#"
            className="ml-10 text-gray hover:text-primary cursor-pointer"
          >
            Project
          </a>
          <a
            href="#"
            className="ml-10 text-gray hover:text-primary cursor-pointer"
          >
            Blog
          </a>
          <a
            href="#"
            className="ml-10 text-gray hover:text-primary cursor-pointer"
          >
            Contact
          </a>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation
