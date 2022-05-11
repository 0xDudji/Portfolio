import { Container, Badge, List, ListItem, Box, Heading, Center} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {BioYear } from '../../components/bio'


const Work = () => (
  <Layout title="Mining">
    <Container>
      <Title>
      Webhosting platform <Badge>Project hosting</Badge>
      </Title>
      <P>
      This was a project where I demonstrated how to visualize historic prices for certain cryptocurrency coins in powershell.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          
          <Meta>Demo</Meta>
          Here is a youtube demo of the final project.
        </ListItem>
        <br></br>
      <Box>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/ljxWAGhfWjY" frameBorder="0" allowFullScreen></iframe>
      </Box>
      </List>
      <Center> <Heading as="h3" variant="section-title">
          Setup
        </Heading>
        </Center>
        <Meta>1</Meta>
          <BioYear>API</BioYear> 
        <Paragraph>
        Using the CryptoCompare API, I was able to get historic data for a bunch of different cryptocurrency coins.
        </Paragraph>
        <br></br>
        <Meta>2</Meta>
        <BioYear>Filtering</BioYear> 
        <Paragraph>
        After getting access to a lot of data, I had to filter out the parts which I did not need. I did this in powershell with different types of filtering techniques that I had learned in class.
        </Paragraph>
        <br></br>
        <Meta>3</Meta>
        <BioYear>visualization</BioYear> 
        <Paragraph>
        I was able to create different types of graph using the Show-Graph module. Using my filtered data and some tweaking of Show-Graph, I was able to visualize what I wanted.
        </Paragraph>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
