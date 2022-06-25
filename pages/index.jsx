import { Box, Container, Link, Text } from "../components"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
}

export default function Home() {
  return (
    <Box css={{ paddingY: "$6" }}>
      <Container size={{ "@initial": "1", "@bp1": "2" }}>
        <AutoPlaySwipeableViews enableMouseEvents interval={10000}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Text as="h2" css={{ fontWeight: 400 }}>
              slide n°1
            </Text>
            <Link>https://github.com/tbrittain</Link>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Text as="h2" css={{ fontWeight: 400 }}>
              slide n°2
            </Text>
            <Link>https://github.com/tbrittain</Link>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <Text as="h2" css={{ fontWeight: 400 }}>
              slide n°3
            </Text>
            <Link>https://github.com/tbrittain</Link>
          </div>
        </AutoPlaySwipeableViews>
      </Container>
    </Box>
  )
}

// for some projects, consider using https://asciinema.org/
// in combination with https://github.com/marionebl/svg-term-cli/
// or https://asciinema.org/a/377532
