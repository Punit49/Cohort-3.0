import React from 'react';
import { useLocation } from 'react-router';

const Navigation = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
      Hello {location.state.name}  
    </div>
  )
}

export default Navigation
