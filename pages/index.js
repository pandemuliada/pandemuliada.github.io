import Head from 'next/head'
import Link from 'next/link'
import { FiEye, FiLink, FiMail } from 'react-icons/fi'
import Container from '../components/Container'
import Navigation from '../components/Navigation'

const projects = [
  {
    slug: 'hartacreativedo',
    image: 'hartacreativedo.png',
    link: 'http://hartacreativedo.com',
  },
  {
    slug: 'urfurniture',
    image: 'urfurniture.png',
    link: 'https://urfurniture.netlify.app',
  },
]

const Home = () => {
  return (
    <>
      <Head>
        <title>Pande Muliada Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navigation />

      <section
        style={{ minHeight: '700px' }}
        className="flex sm:items-center mb-10"
      >
        <Container className="relative grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              className="absolute w-32 opacity-25 pointer-events-none"
              style={{ top: '-30px', left: '-50px', zIndex: 1 }}
              src="/dots.svg"
            />
            <h1 className="text-lg font-mulish">
              <span
                style={{ color: '#444', fontSize: 25 }}
                className="font-light"
              >
                Hi, I'm Pande Muliada
              </span>
              <br />
              <span className="text-primary text-title font-bold leading-snug">
                Front End Developer
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
                  <FiMail className="mr-2" fontSize={20} />
                  <span>Email Me</span>
                </a>
              </Link>
              <a href="/" className="text-gray ml-10">
                Download CV
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative md:mt-0 md:mr-20 mb-10 md:mb-0">
              <img
                src="/rounded-rectangle.svg"
                className="hidden md:block absolute w-48 opacity-25 pointer-events-none"
                style={{ top: '-60px', right: '-60px', zIndex: -1 }}
              />
              <img
                className="absolute md:w-32 opacity-50 pointer-events-none"
                style={{ bottom: '-48px', left: '-48px', zIndex: 1 }}
                src="/dots.svg"
              />
              <img
                src="/images/avatar.jpg"
                className="hidden md:block mx-auto w-full rounded-md"
              />
              <img
                src="/images/avatar-square.jpg"
                className="block md:hidden mx-auto w-full rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        style={{ backgroundColor: 'rgba(251, 251, 251, 0.5)' }}
        className="py-16"
      >
        <Container>
          <h2 className="text-title font-bold mb-10">Projects</h2>

          {projects.map(({ image, link, slug }, index) => (
            <div
              key={`${slug}_${index}_${link}`}
              className={`${
                projects.length - 1 !== index && 'mb-16'
              } rounded-md`}
            >
              <img
                src={`/projects/${image}`}
                className="rounded-md block mb-5"
                style={{ boxShadow: '0 5px 10px rgba(224, 220, 220, 0.25)' }}
              />
              <div className="flex items-center">
                {/* <Link href={`/projects/${slug}`}>
                  <a
                    role="button"
                    className="inline-flex items-center border border-primary py-2 px-4 rounded-md text-primary hover:bg-primary opacity-75 hover:text-white"
                  >
                    <FiEye className="mr-2" fontSize={20} />
                    <span>Project Detail</span>
                  </a>
                </Link> */}
                <a
                  href={`/projects/${slug}`}
                  className="text-gray flex items-center hover:text-primary"
                >
                  <FiEye className="mr-2" fontSize={20} />
                  Project Detail
                </a>
                <a
                  href={link}
                  target="_blank"
                  className="text-gray ml-10 flex items-center hover:text-primary"
                >
                  <FiLink className="mr-2" fontSize={20} />
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}

export default Home
