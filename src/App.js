
import Header from './Components/Header';
import Hero from './Components/Hero';
import bgImage from './Images/bg-image.jpg';

const App = () => {
  return (
    <div className=' ' style={{backgroundImage: `url(${bgImage})`}}>
      <Header/>
      <Hero/>
    </div>
    
  )
}

export default App
