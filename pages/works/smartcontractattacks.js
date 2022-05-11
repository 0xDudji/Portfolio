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
import {IoLogoGithub} from 'react-icons/io5'
import { SiTryhackme } from "react-icons/si";

const Work = () => (
  <Layout title="Bitgoonz">
    <Container>
      <Title>
        Smart Contract Attacks<Badge>TryHackMe</Badge>
      </Title>
      <P>
        My first room on TryHackMe, a platform to teach about cyber security. Smart Contract Attacks is a room to make people aware of vulnerabilities a smart contract on the blockchain can have.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>About</Meta>
          <span>As money kept in smart contracts continues to grow, the motivation to hack them for money becomes more and more appealing. How do you stop a half billion dollars in cryptocurrency from being stolen?</span>
        </ListItem>
        <ListItem>
          <Meta>On the web</Meta>
          <span><Link href="https://tryhackme.com/jr/smartcontractattacks1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiTryhackme />}
              >
                Link to room
              </Button>
            </Link>
            <Link href="https://github.com/skemil/Smart-Contract-Attacks" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Link to document
              </Button>
            </Link></span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Topics</Center>
        
      </Heading>
      <span>This room contains the following vulnerabilities/topics: </span>
      <UnorderedList my={4}>
        <ListItem>

            <Badge mr={2}>Smart Contracts</Badge>
            What are smart contracts?
            <br></br>
        </ListItem>
        <ListItem>

            <Badge mr={2}>Reentrancy</Badge>
            How to drain the balance of a smart contract.
            <br></br>
        </ListItem>
        <ListItem>

            <Badge mr={2}>Arithmetic Overflow and Underflow</Badge>
            Integer exploitation.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Selfdestruct</Badge>
            Destroying smart contracts.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Accessing Private Data</Badge>
            Nothing on the blockchain is private!
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Unsafe Delegatecall</Badge>
            Don't hand power to the unknown.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Insecure Source of Randomness</Badge>
            Is it really that random?
            <br></br>
        </ListItem>
        <WorkImage src="/images/works/smartcontractattackspdf.png" alt="" />
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
