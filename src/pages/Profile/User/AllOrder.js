import React, { useEffect } from "react";
import Message from "../../../components/Message";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button,Badge } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Loader from "../../../components/Loader";
import { getAllOrder, updateOrderStatus } from "../../../redux/actions/order";

const AllOrder = () => {
  const dispatch = useDispatch();
  const orderMyList = useSelector((state) => state.order);
  const { orderList } = orderMyList;

  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  const updateStatus = (id, status) => {
    dispatch(updateOrderStatus(id,status,() =>{
      dispatch(getAllOrder())
    }))
  }

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
                <th>USER</th>
                <th>TOTAL</th>
                <th>STATUS</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr key={order.idTransaksi}>
                  <td>{order.idTransaksi}</td>
                  <td>{order.tanggalTransaksi}</td>
                  <td>{order.user.namaUser}</td>
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
                  <td>
                  {order.statusTransaksi == 1 ? 
                    <Badge variant="primary" onClick={()=>updateStatus(order.idTransaksi, 2)}>Set Paid</Badge>
                    : order.statusTransaksi == 2 ? (
                      <Badge variant="primary" onClick={()=>updateStatus(order.idTransaksi, 3)}>Set Payment Accepted</Badge>
                    ) : order.statusTransaksi ==3 ? (
                      <Badge variant="primary" onClick={()=>updateStatus(order.idTransaksi, 4)}>Set Delivered</Badge>
                      ): ''}
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

export default AllOrder;
