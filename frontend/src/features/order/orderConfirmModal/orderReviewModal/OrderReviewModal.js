import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectUser,
    selectOrderPizzas,
    selectOrderTotal,
    selectTaxRate
} from '../../orderSlice';

import { 
    Divider, 
    Typography, 
    TableContainer, 
    Table,
    TableCell, 
    TableHead, 
    TableBody, 
    TableRow, 
    Paper
} from '@material-ui/core';

import './OrderReviewModal.css';

const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  }


export default function OrderReviewModal (){

    const user = useSelector(selectUser);
    const pizzas = useSelector(selectOrderPizzas);
    const subTotal = useSelector(selectOrderTotal);
    const taxRate = useSelector(selectTaxRate);

    return (
        <div>
            <div className="ContactInfoTitle">
                <Typography variant='h4' component='h4'>
                    Please review your order and confirm
                </Typography>
            </div>
            <Divider variant='middle' />
            <div className="OrderReviewContactInfo">
                <table>
                    {
                        Object.keys(user).map((k) => 
                            (<tr>
                                <td className="ContactInfoKey">{k[0].toUpperCase() + k.slice(1)}:</td>
                                <td className="ContactInfoValue">{user[k]}</td>
                                </tr>)
                        )
                    }   
                </table>
            </div>

            <div>

                <TableContainer component={Paper}>
                    <Table aria-label="order review table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Desc</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {Object.values(pizzas).map((pizza) => (
                                <TableRow key={pizza.pizza.name}>
                                <TableCell>{pizza.pizza.name}</TableCell>
                                <TableCell align="right">{pizza.quantity}</TableCell>
                                <TableCell align="right">{pizza.pizza.price}</TableCell>
                                <TableCell align="right">{ccyFormat(pizza.pizza.price * pizza.quantity)}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">{ccyFormat(subTotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(taxRate * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{ccyFormat(taxRate * subTotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{ccyFormat(subTotal + taxRate * subTotal)}</TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    );


}