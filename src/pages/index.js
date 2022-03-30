import { Text, Box, Center, Button, useColorMode } from '@chakra-ui/react'
import {Particles, NavBar, Container} from "../components/";
import styles from '../styles/Home.module.css'

const Index = () => {
  return(
    <Container className={styles.HomeContainer}>
      <NavBar />
      <Center className={styles.HomeTextName}>
        <Text w="100%" fontSize="8xl" fontWeight="bold">
          Hello, I'm <span style={{color: '#38B2AC'}}>Osama</span>
        </Text>
      </Center>
      <Particles/>
    </Container>
  )
}

export default Index
