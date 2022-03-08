import { Container, Badge, List, ListItem, Box, Heading, Center} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {BioYear } from '../../components/bio'


const Work = () => (
  <Layout title="Mining">
    <Container>
      <Title>
        Mining Assistent <Badge>2016-</Badge>
      </Title>
      <P>
      Because each mining rig is custom made, each customer&apos;s needs are of course different.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          
          <Meta>Favorite OS</Meta>
          Hive OS, a modified version of the Ubutu Linux distro.
          <Meta>Favorite GPU&apos;s</Meta>
          AMD RX 5700XT
        </ListItem>
        <br></br>
      <Box>
        <iframe width="100%" height="400" src="https://youtube.com/embed/VLx5aTdTXFE" frameBorder="0" allowFullscreen></iframe>
      </Box>
      </List>
      <Center> <Heading as="h3" variant="section-title">
          Workflow
        </Heading>
        </Center>

          <BioYear>First calculation</BioYear> 
          <Meta>1</Meta>

        <Paragraph>
        After the first contact moment for buying a mining rig, we will look together what kind of mining rig fits your budget.
        </Paragraph>
        <br></br>
        <BioYear>Ordering the components</BioYear> 
          <Meta>2</Meta>

        <Paragraph>
        Hardware includes the frame, motherboard, processor, memory, power supply, cooling for the rig, frame, ...
        </Paragraph>
        <br></br>
        <BioYear>GPU Hunting</BioYear> 
          <Meta>3</Meta>

        <Paragraph>
        These cards will be purchased on retail basis (If we get lucky) or second hand. The communication and collection of the GPU&apos;s is done by me.
        </Paragraph>
        <br></br>
        <BioYear>Assembly</BioYear> 
          <Meta>4</Meta>

        <Paragraph>
        After the hardware has also arrived, the construction of the mining rig will be started. It is possible that not all video cards have arrived yet. But we can easily plug them in later!        </Paragraph>
        <br></br>
        <BioYear>Ordering the components</BioYear> 
          <Meta>5</Meta>

        <Paragraph>
        Once all the final video cards are also in and the rig is fully technically built, work will begin on configuring the mining software and the GPU&apos;s.        </Paragraph>
        <br></br>
        <BioYear>Delivery</BioYear> 
          <Meta>6</Meta>

        <Paragraph>
        Once the mining rig is finished and has been running stably for some time. It is ready to delivered.
        </Paragraph>

        <WorkImage src="/images/works/rig.jpg" alt="" />
        <WorkImage src="/images/works/Rig2.jpg" alt="" />

        

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
