import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5'
import { SiTryhackme, } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import Image from 'next/image'
import { HiAcademicCap } from "react-icons/hi";

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a future ethical hacker living in Belgium!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Emil D.
          </Heading>
          <p>Final year Cloud &#38; Cybersecurity student.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/emil.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
        From an early age,
        I have always been involved with science and technology.        
        <br></br>
        <br></br>
        I like to educate and improve myself. 
        Not only on a computer science related level. Besides cybersecurity, I have great interests for blockchain, solidity, smart-contracts and decentralized finance.
       {' '}
          {/* <NextLink href="/works/inkdrop" scroll={false}> */}
            {/* <Link>LINK</Link> */}
          {/* </NextLink> */}
        
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2020 - Present</BioYear> 
          Cloud 	&#38; Cybersecurity (Thomas More)
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Technical Secondary Education (Koninklijke Atheneum Geel)
        </BioSection>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {/* {''} */}
          {/* <Link href="https://illust.odoruinu.net/" target="_blank"> */}
            {/* Drawing */}
          {/* </Link> */}
           I enjoy most of my time being outdoors. I practise boxing and Judo. When forced indoors, I listen to podcasts but I also follow a number of sci-fi and fantasy genre movies.
        </Paragraph>
      </Section>

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          Plan for 2023-2024
        </Heading>
        <Paragraph>
          {/* {''} */}
          {/* <Link href="https://illust.odoruinu.net/" target="_blank"> */}
            {/* Drawing */}
          {/* </Link> */}
          <List spacing={3}>
  <ListItem>
    <ListIcon as={HiAcademicCap} color='teal.500' />
    Graduate with a bachelor&apos;s degree in <span style={{fontWeight: 'bold'}}>Cloud &#38; Cybersecurity</span>.
  </ListItem>
  <ListItem>
    <ListIcon as={ImBooks} color='teal.500' />
    Learn C++.
  </ListItem>
  <ListItem>
    <ListIcon as={ImBooks} color='teal.500' />
    Learn Assembly Language.
  </ListItem>
  <ListItem>
    <ListIcon as={ImBooks} color='teal.500' />
    Get into {''}<span style={{fontWeight: 'bold'}}>Malware Development</span> and <span style={{fontWeight: 'bold'}}>Reverse Engineering.</span>
  </ListItem>
</List>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
        <ListItem>
            <Link href="https://twitter.com/Dudji" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @dudji
              </Button>
            </Link>
          </ListItem>
        <ListItem>
            <Link href="https://tryhackme.com/p/skemil" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiTryhackme />}
              >
                @skemil
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/skemil" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @skemil
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/skemil/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @skemil
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/"
            title="Test"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="/"
            title="Test"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
      
        <Box align="center" my={4}>
          <NextLink href="/experience" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Experience
            </Button>
            
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
