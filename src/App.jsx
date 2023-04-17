import './App.css'
import Review from './Review'
import Underline from './Underline'
import ReviewComponent from './ReviewComponent'
function App() {


  return (
    <div className="App">
    <div className='container'>
     <div className='title'>
      <Review/>
     </div>
       <Underline/>
    </div>
     
     <ReviewComponent/>

    </div>
  )
}

export default App
