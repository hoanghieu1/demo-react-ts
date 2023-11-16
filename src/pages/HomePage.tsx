import axios from 'axios';
import {useState, useEffect} from 'react'
import ProductCard from '../components/elements/ProductCard';
import type { ProductType } from '../types/ProductType';



const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    }
    getProduct();
  }, [])
  return (
    <div className='grid grid-cols-5 gap-5'>
      {
        products.map(item => <ProductCard key={item.id} product={item} />)
      }
    </div>
  )
}

export default HomePage