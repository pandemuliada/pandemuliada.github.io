import Head from 'next/head'
import Link from 'next/link'
import { FiEye, FiLink, FiMail } from 'react-icons/fi'
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'
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

const skills = [
  {
    slug: 'html',
    image: 'html.png',
  },
  {
    slug: 'css',
    image: 'css.png',
  },
  {
    slug: 'js',
    image: 'js.png',
  },
  {
    slug: 'react',
    image: 'react.png',
  },
  {
    slug: 'figma',
    image: 'figma.png',
  },
]

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
              src="/images/dots.svg"
            />
            <h1 className="text-lg">
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
                src="/images/rounded-rectangle.svg"
                className="hidden md:block absolute w-48 opacity-25 pointer-events-none"
                style={{ top: '-60px', right: '-60px', zIndex: -1 }}
              />
              <img
                className="absolute md:w-32 opacity-50 pointer-events-none"
                style={{ bottom: '-48px', left: '-48px', zIndex: 1 }}
                src="/images/dots.svg"
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
                src={`/images/projects/${image}`}
                className="rounded-md block mb-5 shadow"
              />
              <div className="flex items-center">
                <a
                  href={link}
                  target="_blank"
                  className="text-gray flex items-center hover:text-primary"
                >
                  <FiLink className="mr-2" fontSize={20} />
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="my-16">
        <Container>
          <h2 className="text-title font-bold mb-8 text-center">Skills</h2>

          <div className="flex justify-center flex-wrap">
            {skills.map(({ slug, image }, index) => (
              <div
                key={`${slug}_${index}`}
                className={`shadow rounded-md mt-4 mx-3 md:mx-6`}
              >
                <img src={`/images/skills/${image}`} className="w-full block" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mb-10">
        <Container>
          <div className="flex items-center flex-wrap bg-primary rounded-md px-8 py-6 md:md:h-24">
            <p
              style={{ fontSize: 25 }}
              className="text-white font-bold tracking-wide mb-5 md:mb-0 text-center md:text-left sm:mr-auto"
            >
              Interested working with me?
            </p>
            <Link href="mailto:@pandemuliada@gmail.com">
              <div className="mx-auto sm:m-0">
                <a
                  role="button"
                  className="inline-flex items-center bg-white py-4 px-6 rounded-md text-primary"
                >
                  <FiMail className="mr-2" fontSize={20} />
                  <span>Email Me</span>
                </a>
              </div>
            </Link>
          </div>
        </Container>
      </section>

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
    </>
  )
}

export default Home
