import Head from "next/head"
import { Box, Container, Link, Text } from "../components"

export default function Home() {
  return (
    <Box css={{ paddingY: "$6" }}>
      <Head>
        <title>Trey Brittain - Portfolio</title>
      </Head>
      <Container size={{ "@initial": "1", "@bp1": "2" }}>
        <Text as="h1">Hello, from Trey.</Text>
        <Text>
          For full documentation, visit{" "}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
      </Container>
    </Box>
  )
}

// for some projects, consider using https://asciinema.org/
// in combination with https://github.com/marionebl/svg-term-cli/
// or https://asciinema.org/a/377532
