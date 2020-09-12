import React, { useEffect, useState } from 'react'
import './Orders.css'; 
import {db} from './firebase';
import {useStateValue} from './StateProvider';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        db
            .collection('orders')
            .

    }, [])

    return (
        <div className="orders">
            
        </div>
    )
}

export default Orders
