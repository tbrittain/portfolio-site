import React, { useEffect, useState } from 'react'
import './LanguageCompositionBar.scss'
import axios from 'axios'
import Spinner from '../Spinner'

const BASE_URL =
  'https://pastime-delicious-maximum.netlify.app/.netlify/functions/line-count'

function LanguageCompositionBar(props): JSX.Element {
  const gitRepo: string = props.gitRepo
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .post(BASE_URL, {
        repoUrl: gitRepo,
      })
      .then((res) => {
        setData(res.data)
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

  return <>gitRepo: {gitRepo}</>
}

export default LanguageCompositionBar
