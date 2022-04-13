import React, { useEffect, useRef, useState } from 'react'
import './LanguageCompositionBar.scss'
import axios from 'axios'
import * as d3 from 'd3'
import Spinner from '../Spinner'

const BASE_URL =
  'https://pastime-delicious-maximum.netlify.app/.netlify/functions/line-count'

interface LanguageResult {
  filetype: {
    name: string
    color: string
  }
  num_lines: number
  size: number
}

function LanguageCompositionBar(props): JSX.Element {
  const gitRepo: string = props.gitRepo
  const [data, setData] = useState([] as LanguageResult[])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const totalNumberOfLines = useRef(0)
  const plotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: {
          url: gitRepo,
        },
      })
      .then((res) => {
        const result = res.data as LanguageResult[]
        setData(result)
        totalNumberOfLines.current = result.reduce(
          (acc, curr) => acc + curr.num_lines,
          0
        )
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [gitRepo])

  useEffect(() => {
    if (plotRef.current) {
      generatePlot(data)
    }
  }, [data])

  useEffect(() => {
    return () => {
      d3.select('#language-plot').remove()
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  console.log(data)
  console.log(error)
  console.log(totalNumberOfLines.current)

  return (
    <>
      <div ref={plotRef} id="language-plot"/>
    </>
  )
  
  function generatePlot(data: LanguageResult[]) {
    const svg = d3.select(plotRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100px')
      .attr('viewBox', '0 0 100 100')
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .append('g')

    // Stack the data for the bars in a one dimensional array
    // https://jsfiddle.net/datashaman/rBfy5/4/light/

  }
}

export default LanguageCompositionBar
