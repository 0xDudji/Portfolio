import { Container, Badge, List, ListItem, Heading, Center} from '@chakra-ui/react'
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

      <Center> <Heading as="h3" variant="section-title">
          Components
        </Heading>
        </Center>
        <Meta>1</Meta>
          <BioYear>Virtualization</BioYear> 
        <Paragraph>
          Vmware        </Paragraph>
        <br></br>
        <Meta>2</Meta>
        <BioYear>OS</BioYear> 
        <Paragraph>
        Ubuntu
        </Paragraph>
        <br></br>
        <Meta>3</Meta>
        <BioYear>Webserver</BioYear> 
        <Paragraph>
Apache / The user interface is a php page where the customer can create an
account, log in and create a domain from which he can select the
desired php version can select. 
        </Paragraph>
        <br></br>
        <Meta>4</Meta>
        <BioYear>Containerization</BioYear> 
        <Paragraph>
          Docker / For each website, we have two docker containers running on our docker
host. These two containers are loadbalanced by a Haproxy container
which also sends requests to the appropriate website cluster.
        </Paragraph>
        <br></br>
        <Meta>5</Meta>
        <BioYear>Configuration Management</BioYear> 
        <Paragraph>
          Puppet / If we change the configuration on multiple devices we are not going to connect to each
device and then enter the change manually. The change in the
configuration is synchronized through a configuration server (Puppetmaster).
        </Paragraph>
        <br></br>
        <Meta>6</Meta>
        <BioYear>Monitoring</BioYear> 
        <Paragraph>
          Zabbix / With this monitoring tool
we have a good overview of all devices and all websites and
we can quickly intervene if necessary.
        </Paragraph>
        <br></br>
        <Meta>7</Meta>
        <BioYear>File Transfer</BioYear> 
        <Paragraph>
          FileZilla (SFTP) / Each user will be given login credentials to access the Web server&apos;s file storage. This access will be over the SSL secured
SFTP protocol, which is SSH-based. 
        </Paragraph>
        <br></br>
        <Meta>8</Meta>
        <BioYear>Database Managing</BioYear> 
        <Paragraph>
          Phpmyadmin / Each user has a SQL container which is accessible the address
db.bakkerdruyts.teamccs1.be. Then the user can login with
username and as password usernameassword. This is a
default password that the user must change immediately.
        </Paragraph>
        <br></br>
        <Meta>9</Meta>
        <BioYear>Backup</BioYear> 
        <Paragraph>
          Rclone / If a user accidentally deletes their files or the data center is
down. Then we can quickly set up all the files and devices back up thanks to
our backups in the Cloud. We backup all users files and
all configuration of our systems to the Cloud so that at any time we have a
backup of all files and can restore them when needed.
        </Paragraph>
        <br></br>
        <Meta>10</Meta>
        <BioYear>Security</BioYear> 
        <Paragraph>
        How is our system secured? We have applied multiple layers of security
applied to make our system as secure as possible. We have implemented a
password policy that ensures users and IT staff must use passwords of at least 10 characters.

We have also ensured that all users can only access their
folder structure and only have permissions to their files.
Next, we also secured our various devices by securing the
Operating System as secure as possible using 5
topics/tools.
For example, here we use Host firewall rules, fail2ban, banner, ...

        </Paragraph>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
