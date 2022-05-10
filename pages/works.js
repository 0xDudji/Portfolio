import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import mining from '../public/images/works/mining.png'
import thumbPichu2 from '../public/images/works/Bitgoonz.png'
import cb from '../public/images/works/cb.png'
import jm from '../public/images/works/jm.png'
import powershellcrypto from '../public/images/works/powershellcrypto.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="cryptopowershell" title="Crypto data visualization in PowerShell" thumbnail={powershellcrypto}>
          A project for the course, Windows system administration.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="systemsengineering"
            title="Systems Engineering"
            thumbnail={jm}
          >
            Solar solution project for the course, Systems Engineering and Analysis.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mining" title="Mining assistent" thumbnail={mining}>
          A service where I help new miners setup their rigs. Miners are essentially getting paid for their work as auditors.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cyberbullet"
            title="Cyberbullet"
            thumbnail={cb}
          >
            Work in progress.
          </WorkGridItem>
        </Section>

        

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Discontinued projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="bitgoonz" thumbnail={thumbPichu2} title="Bitgoonz Crypto Community">
          An online platform with a team made up of close friends with the interest in crypto.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
