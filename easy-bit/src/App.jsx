import React from 'react';
   function App() {
  return (
    <div style={{ maxWidth: '300px', margin: 'auto', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff' }}>
      {/* Blue Top Section */}
      <div style={{ backgroundColor: '#00aaff', height: '80px' }}></div>
      
      {/* Avatar Image */}
      <div style={{ textAlign: 'center', marginTop: '-50px' }}>
        <img src="https://via.placeholder.com/10" alt="Profile" style={{ borderRadius: '50%', border: '3px solid white' }} />
      </div>
      
      {/* User Information */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Rita Correia <span style={{ fontSize: '14px', color: '#666' }}>32</span></h2>
        <p>London</p>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div><p>80K</p><span>Followers</span></div>
          <div><p>803K</p><span>Likes</span></div>
          <div><p>1.4K</p><span>Photos</span></div>
        </div>
      </div>
    </div>
  );
  
};

export default App;
