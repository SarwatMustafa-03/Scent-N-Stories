import Navbar from './components/Header/navbar.jsx'
import Cards from './components/main/cards.jsx'
import Product from './components/main/product.jsx'
import AhlOud from './components/main/AhlOud.jsx'
import Reviews from './components/main/Reviews.jsx'
import Policy from './components/main/Policy.jsx'
import Poster from './components/main/Poster.jsx'

import './index.css'

const App = () => {
  console.log('obj')
return (
  <>
<Navbar />
<Cards/>
<Product />
<AhlOud/>
<Reviews/>
<Policy/>
<Poster/>
  
  </>
)
}
export default App;