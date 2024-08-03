import { Box, Text, Center, Flex, Group, Title, Stack } from '@mantine/core'
import styles from "./App.module.css"

function App() {
  return (
    <Center h="100%">
      <Flex direction={{ base: "column", sm: "row" }} w="80%" bg="white">
        <Box px="md" py="lg" className={styles.left}>
          <Group justify='space-between'>
            <Title order={3}>Mortgage Calculator</Title>
            <Text>Clear All</Text>
          </Group>
        </Box>
        <Box className={styles.right}>
          <Stack gap="sm" p="md">
            <img src="/images/illustration-empty.svg" alt="image" width="300" height="300" />
            <Title ta="center" order={3} c="white">Results shown here</Title>
            <Text ta="center" c="white">Complete the form and click "calculate repayments" to see what your monthly repayments should be</Text>
          </Stack>
        </Box>
      </Flex>
    </Center>
  )
}

export default App
