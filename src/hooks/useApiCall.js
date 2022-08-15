import axios from "axios"
import { useEffect, useState } from "react"

const useApiCall = (url, Apilocation) => {
  const [Data, setData] = useState()
  useEffect(() => {
    axios.get(url)
      .then(res => { setData(res.data) })
      .catch(err => { console.log(err) })
    console.log(Data)
  }, [Apilocation])
  return { Data }
}

export default useApiCall