import { useEffect, useState } from 'react';

const useMyPackages = () => {
   const [packages, setPackages] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/bookings')
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [])

   return [packages];
};

export default useMyPackages;