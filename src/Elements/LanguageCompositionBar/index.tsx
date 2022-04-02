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

  if (loading) {
    return <Spinner />
  }

  console.log(data)
  console.log(error)
  console.log(totalNumberOfLines.current)

  return (
    <>
      <div ref={plotRef}/>
    </> // https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
  )
  
  function generatePlot(data: LanguageResult[]) {
    const svg = d3.select(plotRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 100 100')
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .append('g')

    const width = svg.node()!.getBoundingClientRect().width
    const height = svg.node()!.getBoundingClientRect().height
    const margin = { top: 20, right: 20, bottom: 20, left: 20 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const xScale = d3.scaleBand()
      .domain(data.map((d) => d.filetype.name))
      .range([0, innerWidth])
      .padding(0.1)
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.num_lines)])
      .range([innerHeight, 0])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    const barWidth = xScale.bandwidth()
    const barHeight = (d: LanguageResult) => yScale(d.num_lines)
    const barX = (d: LanguageResult) => xScale(d.filetype.name)
    const barY = (d: LanguageResult) => yScale(d.num_lines)
    const barColor = (d: LanguageResult) => d.filetype.color
    const barOpacity = (d: LanguageResult) => d.num_lines / totalNumberOfLines.current
    const barTooltip = (d: LanguageResult) => `${d.filetype.name}: ${d.num_lines}`

    const bar = svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', barX)
      .attr('y', barY)
      .attr('width', barWidth)
      .attr('height', barHeight)
      .attr('fill', barColor)
      .attr('opacity', barOpacity)
      .attr('data-tip', barTooltip)
      .attr('data-for', 'tooltip')

    svg
      .append('g')
      .attr('class', 'x-axis')
      .call(xAxis)

    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(yAxis)

    svg
      .append('text')
      .attr('class', 'x-axis-label')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + margin.bottom)
      .attr('text-anchor', 'middle')
      .text('Filetype')

    svg
      .append('text')
      .attr('class', 'y-axis-label')
      .attr('x', -innerHeight / 2)
      .attr('y', -margin.left)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Number of Lines')

    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)


    bar
      .on('mouseover', function(event, d) {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0.9)
        tooltip
          .html(d.filetype.name)
          .style('left', `${event.pageX}px`)
          .style('top', `${event.pageY - 28}px`)
      })
      .on('mouseout', function() {
        tooltip
          .transition()
          .duration(500)
          .style('opacity', 0)
      })

  }
}

export default LanguageCompositionBar
