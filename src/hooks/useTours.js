import { useEffect, useState } from "react"

const useTours = () => {
   const [tours, setTours] = useState([])
   useEffect(() => {
      fetch('/fakeData/tour.json')
      .then(res => res.json())
      .then(data => setTours(data))
   }, [])

   return [tours];
}

export default useTours;

