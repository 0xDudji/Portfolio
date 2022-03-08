import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  Center
} from '@chakra-ui/react'

import { BioSection, BioYear } from '../components/bio'
import { WorkGridItem } from '../components/grid-item2'
import mining from '../public/images/works/mining.png'
import bitgoonz from '../public/images/works/Bitgoonz.jpg'
import bfk from '../public/images/works/bfk.jpg'
import cardinal from '../public/images/works/cardinal.jpg'
import Olympia from '../public/images/works/olympia.jpg'

const Posts = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My experience
      </Heading>
      <Section delay={0.2}>
      <br></br>
        <BioSection>
          <BioYear><Center>September 2021 - Present</Center></BioYear> 
          <WorkGridItem
            title="CRYPTO MINING ASSISTENT"
            thumbnail={mining}
          >
            From looking for graphics cards to picking the prefered operating system. I made sure my clients had their
            mining rigs installed, configured and running.
          </WorkGridItem>
        </BioSection>
      </Section>
      <Section delay={0.2}>
      <br></br>
        <BioSection>
          <BioYear><Center>2020 - 2022</Center></BioYear> 
          <WorkGridItem
            title="CRYPTO COMMUNITY FOUNDER (Bitgoonz)"
            thumbnail={bitgoonz}
          >
            From educating myself in cryptocurrency trading to building a brand and community in the online cryptocurrency world. Addressing upcoming news, trends and education in cryptocurrencies, blockchain, and defi.
          </WorkGridItem>
        </BioSection>
      </Section>
      <Section delay={0.2}>
      <br></br>
        <BioSection>
          <BioYear><Center>July 2019 - September 2019</Center></BioYear> 
          <WorkGridItem
            title="DOOR SALESMAN VOLUNTEER (Belgium For Kids)"
            thumbnail={bfk}
          >
            Responsible for going door-to-door and selling merchandise to raise funds for special needs kids. Setting up products, and events with the raised funds.
          </WorkGridItem>
        </BioSection>
      </Section>
      <Section delay={0.2}>
      <br></br>
        <BioSection>
          <BioYear><Center>March 2018 - September 2018</Center></BioYear> 
          <WorkGridItem
            title="WAITER (Il Cardinale)"
            thumbnail={cardinal}
          >
            Greeting guests and taking drink and food orders. Staying attentive to the needs of guests in the dining area. Delivering food from the kitchen to the guests. Ensuring the food order is made correctly by kitchen staff and looks presentable for guests.
          </WorkGridItem>
        </BioSection>
      </Section>
      <Section delay={0.2}>
      <br></br>
        <BioSection>
          <BioYear><Center>2017 - 2018</Center></BioYear> 
          <WorkGridItem
            title="FITNESS COACH (Olympia)"
            thumbnail={Olympia}
          >
            Mentoring clients in their journey for a healthier lifestyle. Motivating individuals and groups in exercise activities, strength training, and stretching. Worked with people of all ages and skill levels.
          </WorkGridItem>
        </BioSection>
      </Section>
      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
