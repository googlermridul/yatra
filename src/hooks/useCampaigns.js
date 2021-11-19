import { useEffect, useState } from "react"

const useCampaigns = () => {
   const [campaigns, setCampaigns] = useState([])
   useEffect(() => {
      fetch('/fakeData/campaign.json')
      .then(res => res.json())
      .then(data => setCampaigns(data))
   }, [])

   return [campaigns];
}

export default useCampaigns;