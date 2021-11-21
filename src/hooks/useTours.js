import { useEffect, useState } from "react"

const useTours = () => {
   const [tours, setTours] = useState([])
   useEffect(() => {
      fetch('https://tranquil-atoll-29388.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => setTours(data))
   }, [])

   return [tours];
}

export default useTours;

