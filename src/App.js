import './App.css'
import Header from './component/Header'
import Product from './component/Product'
const data = [
  {
    "id": 1,
    "name": "Product1",
    "desc": "Cosmetic brand and a short description",
    "price": "16",
    "img": "./images/product1.svg",
    "sale": "12"
  },
  {
    "id": 2,
    "name": "Product2",
    "desc": "Cosmetic brand and a short description",
    "price": "12",
    "img": "./images/product1.svg",
    "sale": "10"
  },
  {
    "id": 3,
    "name": "Product3",
    "desc": "Cosmetic brand and a short description",
    "price": "8",
    "img": "./images/product3.svg",
    "sale": "7"
  }
]
function App() {
  const renderProduct = () => {
    return data.map((item, index) => {
      return <Product product={item} key={index} />
    })
  }
  return (
    <div className="container">
      <div className='secction'>
        <Header />
        <div className="products">
          {renderProduct()}
        </div>
      </div>
    </div>
  );
}

export default App
