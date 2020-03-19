import React, {useContext} from 'react'

import AppContext from '../../store'

function Dashboards(props:any) {

  const ctx = useContext(AppContext)
  console.log(ctx);
  
  return (
    
      <div>
        Dashboard
      </div>
    
  )
}

export default Dashboards
