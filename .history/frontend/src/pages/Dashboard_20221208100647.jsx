import React, { useContext, useEffect, useReducer } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          summary: action.payload,
          loading: false,
        };
      case 'FETCH_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};
  
  const Dashboard = () => {
    const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
      loading: true,
      error: '',
    });
    const { state } = useContext(Store);
    const { userInfo } = state;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get('/api/orders/summary', {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          });
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
          dispatch({
            type: 'FETCH_ERROR',
            payload: getError(err),
          });
        }
      };
      fetchData();
    }, [userInfo]);
  
    return (
      <div>
        <h1>Dashboard</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {summary. && summary.userList[0]
                        ? summary.userList[0].numUsers
                        : 0}
                    </Card.Title>
                    <Card.Text> Users</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {summary.orders && summary.userList[0]
                        ? summary.orders[0].numOrders
                        : 0}
                    </Card.Title>
                    <Card.Text> Orders</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      $
                      {summary.orders && summary.userList[0]
                        ? summary.orders[0].totalSales.toFixed(2)
                        : 0}
                    </Card.Title>
                    <Card.Text> Orders</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="my-3">
              <h2>Sales</h2>
              {summary.dailyOrders.length === 0 ? (
                <Message>No Sale</Message>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Date', 'Sales'],
                    ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                  ]}
                ></Chart>
              )}
            </div>
            <div className="my-3">
              <h2>Categories</h2>
              {summary.productCategories.length === 0 ? (
                <Message>No Category</Message>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Category', 'Products'],
                    ...summary.productCategories.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
export default Dashboard;
