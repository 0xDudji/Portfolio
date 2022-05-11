import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import {IoLogoInstagram} from 'react-icons/io5'
import { SiBitcoinsv } from "react-icons/si";

const Work = () => (
  <Layout title="Bitgoonz">
    <Container>
      <Title>
        Bitgoonz <Badge>2020</Badge>
      </Title>
      <P>
        A brand and community in the online cryptocurrency world. Unfortunately the group split up due to personal reasons.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mission</Meta>
          <span>Addressing upcoming news, trends and education  in cryptocurrencies, finance, technology, blockchain, defi and markets. We believed in the future of digital assets and the 
        importance of their role in enhancing the current financial system for a more decentralized financial (DeFi) world.</span>
        </ListItem>
        <ListItem>
          <Meta>On the web</Meta>
          <span><Link href="https://bitgoonz.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiBitcoinsv />}
              >
                bitgoonz.com
              </Button>
            </Link>
            <Link href="https://instagram.com/bitgoonz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @bitgoonz
              </Button>
            </Link></span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Market Indicators</Center>
        
      </Heading>
      <span>Essential technical analysises tools to utilize in a volatile market when identifying swings. </span>
      <UnorderedList my={4}>
        <ListItem>

            <Badge mr={2}>Gaunt Wave</Badge>
            Combination of four algorithms that have all been smoothed and fine-tuned. When all of the algorithms align, a “Green Dot” will appear which will guide you when longing in bull markets.
            <br></br>
            <br></br>
            <WorkImage src="/images/works/Gauntwave.png" alt="" />
            <br></br>
        </ListItem>

        <ListItem>
          
            <Badge mr={2}>Goon Curve</Badge>
            Each market cycle begins from the bottom of the previous one. Logarithmic growth curves increase quickly in the beginning, but the gains decrease and become more difficult as time goes on.
            <br></br>
            <br></br>
            <WorkImage src="/images/works/Gooncurve.png" alt="" />
            <br></br>
        </ListItem>

        <ListItem>
          
          <Badge mr={2}>Cycle Ribbon</Badge>
          Made to easily analyze and anticipate trends. The EMA ribbon will be brown during a bull market and black during a bear market. Comes with robust mathematical support and resistance, the symbols correspond to various indications.
          <br></br>
          <br></br>
          <WorkImage src="/images/works/CycleRibbon.png" alt="" />
          <br></br>
      </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
