import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {


  const addToCartHandler = () => {

  }

  return (
    <div className="home">
      
      <section>

      </section>

      <h1>Latest Products 

      <Link
      to={"/search"}
      className="findmore"
      >
      More        
      </Link> 

      </h1>

      <main>
      
      <ProductCard
      productId="lorem"
      name="Macbook"
      price={454}
      stock={5}
      handler={addToCartHandler}
      photo="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsk3qpyutv-sZfVx0riiTgKpOeKX9d21SGkTO0IZhUw0MvSrEeN8SbGxHFl5a__ZYGi7onIARftwXlZ-_ol_IKk_Dl7jF-Tl02K4e13TfSjyhc_mlUnLlu1pwNNJWmYHTOiILbVL0&usqp=CAc"
      />

      </main>

    </div>
  )
}

export default Home
