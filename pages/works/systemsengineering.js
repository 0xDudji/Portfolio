import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'


const Work = () => (
  <Layout title="Bitgoonz">
    <Container>
      <Title>
      Solar solution project <Badge>Systems Engineering and Analysis</Badge>
      </Title>
      <P>
        This was a project I did together with a few classmates for the course Systems Engineering and Analysis.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Problem</Meta>
          <span>The reversable counter for electricity is slowly dissapearing, which is a problem for solar panels owners. Me and my team had to come up with a solution!</span>
        </ListItem>
        <ListItem>
          <Meta>Mission</Meta>
          <span>Because the reversable counter is dissapearing, you&apos;re going to have to register the excess energy that you generate. If your solar panels generate less energy than usual, you&apos;re going to have to buy it back at a certain rate, we want to we want to avoid this as much as possible. There was need to for a feature to monitor the generated enery as well. </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>The team</Center>
        
      </Heading>
      <span>My team consisted of 4 very enthusiastic students. Me, Michiel Janssens, Tim Verbecque and last but not least, Hanne Verschueren.</span>
      <UnorderedList my={4}>
        <ListItem>

            <Badge mr={2}>JM2</Badge>
            Our team name was JM2. Jochen Marien was our client for this project, our decisions were communication with him and we occasionally held presentations to further discuss things about the project and the state of it. Tim and Michiel are also Cloud and Cybersecurity students but Hanne is studying IoT which came in very handy.
            <br></br>
        </ListItem>
        </UnorderedList>

        <Heading as="h4" fontSize={16} my={6}>
        <Center>The setup</Center>
      </Heading>
      <span>Eventually, we got everything to work together and rounded up a successful project. Here is a list of the used components.</span>
      <UnorderedList my={4}>
      <ListItem>
            <Badge mr={2}>Notifications</Badge>
            Push notifications           
        </ListItem>
        <ListItem>
            <Badge mr={2}>Weather</Badge>
            Solcast       
        </ListItem>
        <ListItem>
            <Badge mr={2}>Controller</Badge>
            Esp 32 Huzzah
        </ListItem>
        <ListItem>
            <Badge mr={2}>Webserver</Badge>
            Nginx
        </ListItem>
        <ListItem>
            <Badge mr={2}>Measuring</Badge>
            SDM120DB        
        </ListItem>
        <ListItem>
            <Badge mr={2}>Interface</Badge>
            A website.           
        </ListItem>
        <ListItem>
            <Badge mr={2}>Wall outlet</Badge>
            Sonoff        
        </ListItem>
        <ListItem>
            <Badge mr={2}>Database</Badge>
            mySQL 
        </ListItem>
        <br></br>
        <WorkImage src="/images/works/setup.png" alt="" />
        
        </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
