import React, { useEffect, useRef, useState } from 'react'
import './LanguageCompositionBar.scss'
import axios from 'axios'
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
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const totalNumberOfLines = useRef(0)

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
        // reduce each language to the number of lines
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

  if (loading) {
    return <Spinner />
  }

  console.log(data)
  console.log(error)
  console.log(totalNumberOfLines.current)

  return (
    <>language goes here</>
  )
}

export default LanguageCompositionBar
