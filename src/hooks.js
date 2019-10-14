import { useState, useEffect } from 'react'
import axios from 'axios'
export const useField = (type) => {  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  const field = {
    type,
    value,
    onChange,
  }

  return [
    field,
    reset
  ]
}
  
export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
  
    useEffect(() => {
      axios
      .get(baseUrl)
      .then(response => response.data)
      .then(data => setResources(data))
    }, [baseUrl])
  
    const create = async (resource) => {
      const response = await axios.post(baseUrl, resource)
      //return response.data
      setResources(resources.concat(response.data))
    }
  
    const service = {
      create
    }
  
    return [
      resources, service
    ]
  }