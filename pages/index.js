import Head from 'next/head'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'

const Container = ({ children, ...props }) => (
  <div className={`container mx-auto px-10 sm:px-12 ${props.className}`}>
    {children}
  </div>
)

const Navigation = () => {
  return (
    <nav>
      <Container className="flex py-4">
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Pande Muliada ~ Front End Web Developer & UI Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation />

      <section style={{ minHeight: '700px' }} className="flex sm:items-center">
        <img
          className="absolute w-32 opacity-25 pointer-events-none"
          style={{ top: '130px', left: '50px', zIndex: 1 }}
          src="/dots.svg"
        />
        <Container className="md:grid grid-cols-2">
          <div>
            <h1 className="text-lg font-mulish">
              <span
                style={{ color: '#444', fontSize: 25 }}
                className="font-light"
              >
                Hi, I'm Pande Muliada
              </span>
              <br />
              <span className="text-primary text-title font-bold leading-snug">
                Front End Developer & <br /> UI Designer
              </span>
            </h1>

            <p className="text-gray leading-relaxed mt-8 mb-10">
              I’m from Indonesia and working as freelance Front End Developer. I
              have been learning to code since I was 15 years old. I do enjoy
              programming because I love to solve problem and it fells amazing
              when I solve problem with programming. I’m looking forward to
              collaborate with you!
            </p>

            <div className="flex items-center">
              <Link href="mailto:@pandemuliada@gmail.com">
                <a
                  role="button"
                  className="inline-flex items-center bg-primary py-4 px-6 rounded-md text-white hover:opacity-75"
                >
                  <FiMail className="mr-2" fontSize={22} />
                  <span>Email Me</span>
                </a>
              </Link>
              <a href="/" className="text-gray ml-10">
                Download CV
              </a>
            </div>
          </div>
          <div className="relative flex justify-end">
            <div className="relative mt-20 md:mt-0 md:mr-20">
              <img
                src="/rounded-rectangle.svg"
                className="absolute w-48 opacity-25 pointer-events-none"
                style={{ top: '-60px', right: '-60px', zIndex: -1 }}
              />
              <img
                className="absolute w-32 opacity-50 pointer-events-none"
                style={{ bottom: '-48px', left: '-48px', zIndex: 1 }}
                src="/dots.svg"
              />
              <img
                src="/images/avatar.jpg"
                className="mx-auto w-100 rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
