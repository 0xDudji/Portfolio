import { Container, Badge, List, ListItem, Heading, Center, UnorderedList} from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
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
      In this project we are going to set up an online hosting service on the ITF data center of Thomas More Geel. This is still a work in progress.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          
          <Meta>Mission</Meta>
          With our online hosting service, students of the second and third year APP/AI should be able to host their PHP project/website on our website.
        </ListItem>
        <br></br>
        <WorkImage src="/images/works/projecthostingdiagram.png" alt="" />
        <br></br>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>The team and roles</Center>
        
      </Heading>
      <span>I will be working on this project with 5 other very smart students.</span>
      <UnorderedList my={4}>
        <ListItem>
            <Badge mr={2}>Brent Druyts</Badge>
            Developer, loading balancing and Security.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Siebe Van Rompay</Badge>
            Developer, back up and containerize.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Emil Dudayev</Badge>
            Developer and monitoring.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Timo Van Litsenborg</Badge>
            Developer, web application, user interface and database.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Laurens Mattheus</Badge>
            Scrum master/developer, automatisation and file transfer.
            <br></br>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Illias Latifine</Badge>
            Time keeper/developer, file transfer and documentation.
            <br></br>
        </ListItem>
        </UnorderedList>
        

      <Center> <Heading as="h3" variant="section-title">
          What am I working on right now?
        </Heading>
        </Center>
        <Meta>1</Meta>
          <BioYear>Monitoring</BioYear> 
        <Paragraph>
        For monitoring, we are going to use Zabbix. Zabbix is an open source monitoring solution for network monitoring and application monitoring of millions of metrics.
        </Paragraph>
        <br></br>
        <Meta>2</Meta>
        <BioYear>Testing</BioYear> 
        <Paragraph>
        Zabbix has been succesfully implemented on test servers.
        </Paragraph>
        <br></br>
        <Meta>3</Meta>
        <BioYear>Containerize</BioYear> 
        <Paragraph>
        Right now, I am trying to figure out how to setup a docker dontainer for monitoring with Zabbix. When that&apos;s done, my team and I can start putting all the components together.
        </Paragraph>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
