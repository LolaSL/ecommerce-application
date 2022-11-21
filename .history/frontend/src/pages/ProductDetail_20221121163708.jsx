
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    const [{ loading, error, product }, dispatch] = useReducer(
        (reducer),
        {
          productList: [],
          loading: true,
          error: "",
        }
      );
    const { slug } = params;
    useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get("/api/products");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (error) {
            dispatch({ type: "FETCH_ERROR", payload: error.message });
          }
        };
        fetchData();
      }, []);
  return (
      <div>
          <h1>{slug}</h1>
          
      </div>
  )
}
export default ProductDetail;