import React from 'react';



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
const ProductEdit = () => {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });
  
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  
  const fetchData = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await axios.get(`/api/products/${productId}`);
      setName(data.name);
      setSlug(data.slug);
      setPrice(data.price);
      setImage(data.image);
      setImages(data.images);
      setCategory(data.category);
      setCountInStock(data.countInStock);
      setBrand(data.brand);
      setDescription(data.description);
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
        payload: getError(err),
      });
    }
  };
  fetchData();
}, [productId]);

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    dispatch({ type: 'UPDATE_REQUEST' });
    await axios.put(
      `/api/products/${productId}`,
      {
        _id: productId,
        name,
        slug,
        price,
        image,
        images,
        category,
        brand,
        countInStock,
        description,
      },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: 'UPDATE_SUCCESS',
    });
    toast.success('Product updated successfully');
    navigate('/admin/products');
  } catch (err) {
    toast.error(getError(err));
    dispatch({ type: 'UPDATE_FAIL' });
  }
};
const uploadFileHandler = async (e, forImages) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append('file', file);
  try {
    dispatch({ type: 'UPLOAD_REQUEST' });
    const { data } = await axios.post('/api/upload', bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'UPLOAD_SUCCESS' });

    if (forImages) {
      setImages([...images, data.secure_url]);
    } else {
      setImage(data.secure_url);
    }
    toast.success('Image uploaded successfully. click Update to apply it');
  } catch (err) {
    toast.error(getError(err));
    dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
  }
};
  return (
    <div>
      Edit products
    </div>
  )
}

export default ProductEdit;
