import React, { useState, useEffect } from 'react'

const Datetime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      // Get day name (e.g., "Monday")
      const dayName = now.toLocaleDateString('en-US', { weekday: 'long' })
      
      // Get date (e.g., "6")
      const date = now.getDate()
      
      // Get time (e.g., "8:30pm")
      const time = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
      
      setDateTime(`${dayName} ${date}, ${time}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default Datetime