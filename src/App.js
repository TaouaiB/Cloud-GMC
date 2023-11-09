import './App.css';

function App() {
 
  return (
    <div className="map">
    <h1>Google Maps</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5810.472558621404!2d8.795282190163489!3d34.40747363940681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f897a91596c835%3A0xcb971947a8384fc5!2sMama%20El%20Baya!5e0!3m2!1sfr!2stn!4v1699546328725!5m2!1sfr!2stn" 
    width="70%" 
    height="500"
    style={{border:"5",marginLeft:"15%",marginTop:"5%"}}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  );
}

export default App;
