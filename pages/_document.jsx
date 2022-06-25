import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../stitches.config"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,400;1,200;1,400&family=IBM+Plex+Sans:ital,wght@0,200;0,400;1,200;1,400&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <title>Trey Brittain - Portfolio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
