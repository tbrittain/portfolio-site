import React, { useState, useEffect, useCallback } from 'react'

// TODO: https://www.robinwieruch.de/react-intersection-observer-api

function ScrollProgressBar() {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
  // const [maxScrollPosition, setMaxScrollPosition] = useState(window.scrollMaxY)
  const handleScroll = useCallback(() => {
    const position = window.pageYOffset
    setScrollPosition(position)
    console.log(scrollPosition)
  }, [scrollPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return <></>
}

export default ScrollProgressBar
