import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Welcome!
        </Heading>
        <Paragraph>
        Hi there! Welcome to the homepage of a cybersecurity student. I have your IP, and I&apos;m sending viruses as we speak.
       {' '}
          {/* <NextLink href="/works/inkdrop" scroll={false}> */}
            {/* <Link>LINK</Link> */}
          {/* </NextLink> */}
        
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/about" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Who am I?
            </Button>
          </NextLink>
        </Box>
      </Section>

  
      <Section delay={0.3}>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
