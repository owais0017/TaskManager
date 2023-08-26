import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}
  style={{
    width: '100%',         // Set the width to 100% of the viewport
    height: '100%',       // Set the height to 100% of the viewport height
    position: 'fixed',     // Position fixed to cover the entire viewport
    top: 0,                // Align to the top
    left: 0,               // Align to the left
    zIndex: -1             // Place the canvas behind other content
  }}

  
  >
    .
  </div>
} 
export default MyComponent;