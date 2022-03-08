import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cyberbullet">
    <Container>
      <Title>
        Cyberbullet <Badge>2022</Badge>
      </Title>
      <P>
        Work in progress.
      </P>


      <Heading as="h4" fontSize={16} my={6}>
        <Center>Content</Center>
      </Heading>


      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/cb1.png" alt="" />
        <WorkImage src="/images/works/cb2.png" alt="" />
      </SimpleGrid> */}
       <SimpleGrid columns={1} gap={1}>
        <WorkImage src="/images/works/cb1.png" alt="" />
        <WorkImage src="/images/works/cb2.png" alt="" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
