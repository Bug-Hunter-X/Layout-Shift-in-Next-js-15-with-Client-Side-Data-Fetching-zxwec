```javascript
// pages/about.js
import React from 'react';

export default function About() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({ message: 'About Page' });
    };
    fetchData();
  }, []);

  return (
    <div style={{width: '500px', height: '100px'}}> {/* Placeholder styles */} 
      {data ? ( 
        <h1>{data.message}</h1>
      ) : (
        <div style={{width: '500px', height: '100px'}}>Loading...</div> {/* Placeholder styles */} 
      )}
    </div>
  );
}
```