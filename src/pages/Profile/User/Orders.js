import React, { useEffect } from "react";
import Message from "../../../components/Message";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Loader from "../../../components/Loader";
import { getMyOrder } from "../../../redux/actions/order";

const Orders = () => {
  const dispatch = useDispatch();
  const orderMyList = useSelector((state) => state.order);
  const { orderList } = orderMyList;

  useEffect(() => {
    dispatch(getMyOrder());
  }, [dispatch]);

  let order;
  if (orderList) {
    if (orderList.length === 0) {
      order = (
        <>
          <Message>No Products Ordered</Message>
          <h1>Make a new Purchase now!</h1>

          {/* <LinkContainer to={`/shop`}>
            <Button className="btn-sm">Shop now</Button>
          </LinkContainer> */}
        </>
      );
    } else {
      order = (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr key={order.idTransaksi}>
                  <td>{order.idTransaksi}</td>
                  <td>{order.tanggalTransaksi}</td>
                  <td>Rp.{order.hargaKeseluruhan}</td>
                  <td>
                    {order.statusTransaksi == 1 ? (
                      'Created'
                    ) : order.statusTransaksi == 2 ? (
                      'Paid'
                    ) : order.statusTransaksi ==3 ? (
                      'Payment Accepted'
                      ): 'Delivered'}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
    }
  }
  return (
    <>
      {/* {loading && <Loader />}
      {error && <Message>{error}</Message>} */}
      <div>{order}</div>
    </>
  );
};

export default Orders;
