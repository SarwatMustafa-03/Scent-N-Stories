import Navbar from './components/Header/navbar.jsx'
import Cards from './components/main/cards.jsx'
import Product from './components/main/product.jsx'
import AhlOud from './components/main/AhlOud.jsx'
import Reviews from './components/main/Reviews.jsx'

import './index.css'

const App = () => {
  console.log('object');
return (
  <>
<Navbar />
<Cards/>
<Product />
<AhlOud/>
<Reviews/>
  
  </>
)
}
export default App;