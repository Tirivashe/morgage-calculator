import { Box, Text, Center, Flex, Group, Title } from '@mantine/core'
import styles from "./App.module.css"

function App() {
  return (
    <Center h="100%">
      <Flex direction={{ base: "column", sm: "row" }} w="80%">
        <Box px="md" py="lg" className={styles.left}>
          <Group justify='space-between'>
            <Title order={3}>Mortgage Calculator</Title>
            <Text>Clear All</Text>
          </Group>
        </Box>
        <Box className={styles.right}>
          <img src="/images/illustration-empty.svg" alt="image" />
        </Box>
      </Flex>
    </Center>
  )
}

export default App
