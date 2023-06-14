import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Badge,
  Box,
  Button,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
    
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkImage, Meta } from '../components/work'
import P from '../components/paragraph'
import {BioYear } from '../components/bio'




const Home = () => (
<Layout title="Bitgoonz">
    <Container>

      <Heading as="h2" variant="page-title">
            Deloitte <Badge>Internship</Badge>
          </Heading>
      <P>
      In this section, I will discuss my internship experience with Deloitte&apos;s cyber team. I will provide an overview of the nature of the issue I was tasked with and the solution I developed. 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Title of the internship subject</Meta>
          <span>Automated SIEM / EDR / XDR Reports</span>
        </ListItem>
        <ListItem>
          <Meta>Shared vision</Meta>
          <span>Our shared vision is to develop an efficient program that seamlessly converts data from Excel spreadsheets into visually appealing representations and automatically integrates them into PowerPoint presentations. </span>
        </ListItem>
      </List>
      <WorkImage src="/images/d1.jpg" alt="" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Why</Center>
        
      </Heading>
      <span>What was the challenge that Deloitte was facing which led to this project?</span>
      <br></br>
      <br></br>
      <span>Deloitte&apos;s Detect & Respond team, is facing a challenge in generating reports for their clients. These reports are based on data sourced from Deloitte&apos;s SIEM/EDR/XDR system. The current process for creating these reports involves manually analyzing data from Excel spreadsheets, creating visual representations, and then inserting these visuals into PowerPoint presentations to share with clients.</span>
      <UnorderedList my={4}>
        <ListItem>

            <Badge mr={2}>Time-consuming</Badge>
            <br></br>
        </ListItem>
        <ListItem>

            <Badge mr={2}>Labor-intensive</Badge>
            <br></br>
        </ListItem>
        <ListItem>

            <Badge mr={2}>Prone to human errors</Badge>
            <br></br>
        </ListItem>
        <br></br>
        <span>It is crucial for Deloitte to optimize their reporting process to better serve their clients and maintain a competitive edge in the industry. To address this challenge, Deloitte has initiated an internship assignment to develop a program that automates the report generation process. </span>
      </UnorderedList>
      <WorkImage src="/images/d2.jpg" alt="" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Plan of approach</Center>
      </Heading>
        <span>When tackling the subject I was tasked with, I came up with a plan of approach for myself. I was determined to finish my internship in three phases.</span>
        <br></br>
        <br></br>
        <Meta>1</Meta>
        <BioYear>Preparation Phase</BioYear> 
        <UnorderedList>
          <ListItem>Gathering as much information as possible about the subject and the reporting process.</ListItem>
        </UnorderedList>
        <br></br>
        <Meta>2</Meta>
        <BioYear>Concept Phase</BioYear> 
        <UnorderedList>
          <ListItem>Evaluating and comparing different technologies and programming languages to implement our solution.</ListItem>
        </UnorderedList>
        <br></br>
        <Meta>3</Meta>
        <BioYear>Realization Phase</BioYear> 
        <UnorderedList>
          <ListItem>Bringing ideas to life using the technology selected during the concept phase.</ListItem>
        </UnorderedList>

        <Heading as="h4" fontSize={16} my={6}>
        <Center>Workflow</Center>
      </Heading>
        <span>Here we have a high-level representation of what my solution is supposed to do.</span>
        <br></br>
        <WorkImage src="/images/workflow.png" alt="" />

        <Heading as="h4" fontSize={16} my={6}>
        <Center>Solution</Center>
      </Heading>
        <span>To address the challenge, I developed a solution utilizing various Python libraries. The graphical user interface (GUI) serves as a key component of my solution, enabling seamless interaction. Behind the scenes, the solution involves data manipulation through the import of relevant libraries</span>
        <br></br>
        <br></br>
        <WorkImage src="/images/gui.png" alt="" />

        <span>I ensured a smooth handover process by compiling my Python script into 
        an executable file and creating a setup program. This allows the script to be run 
        independently on any machine, eliminating the need for specific libraries or a Python 
        installation</span>

        <Heading as="h4" fontSize={16} my={6}>
        <Center>Results</Center>
      </Heading>
        <span>Through my solution, I successfully generate a  report incorporating pivot tables and charts based on the imported tickets. These visual elements are seamlessly integrated into PowerPoint presentations. Notably, the visuals are dynamically synced, ensuring any changes in the underlying Excel data are automatically reflected in the corresponding PowerPoint visuals.</span>
        <br></br>
        <br></br>
        <WorkImage src="/images/results.png" alt="" />

        <Box align="center" my={4}>
          <a href="https://www.dropbox.com/s/4dk8jh28m7upgb3/Deloitte%20Internship%20Project%20Plan%20and%20Realization.pdf?dl=0" scroll={false}target="_blank" rel="noopener noreferrer">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mx={1}>
              Project Plan and Realization
            </Button>
          </a>
          <NextLink href="/about" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mx={1}>
              Pyplot Manual
            </Button>
          </NextLink>
          <a href="https://www.dropbox.com/s/liq8gjklau15ljk/Internship_Selfreflection.pdf?dl=0" scroll={false} target="_blank" rel="noopener noreferrer">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mx={1} >
              Self Evaluation
            </Button>
          </a>
        </Box>

    </Container>
  </Layout>
)


export default Home
export { getServerSideProps } from '../components/chakra'
