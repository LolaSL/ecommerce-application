import {useParams} from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    const [{ loading, error, productList }, dispatch] = useReducer(
        logger(reducer),
        {
          productList: [],
          loading: true,
          error: "",
        }
      );
    const { slug } = params;

  return (
      <div>
          <h1>{slug}</h1>
          
      </div>
  )
}
export default ProductDetail;