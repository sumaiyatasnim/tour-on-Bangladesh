import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    // const [control, setControl] = useState(false);
    console.log(user.email)

    useEffect(() => {
        fetch(`https://rocky-waters-74855.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrder(data);

            });
    }, [user?.email]);
    console.log(myOrder);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://rocky-waters-74855.herokuapp.com/delteOrder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')

                        const remainingUsers = myOrder.filter(order => order._id !== id);
                        setMyOrder(remainingUsers);
                    }
                });
            console.log(id);
        }
    };
    return (
        <div className="container mt-5">
            <h1>My Orders</h1>
            <div className="services">
                <div className="row container">
                    {myOrder?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.img} alt="" />
                                </div>

                                <h6>{pd?.name}</h6>
                                <h6>{pd?.email}</h6>
                                <p>{pd?.address}</p>

                                {/* <h6>Product name: {pd?.pd?.name}</h6>
                                <p>{pd?.pd?.description}</p>
                                <h3 className="text-success"> Cost :{pd?.pd?.price}$</h3> */}

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;