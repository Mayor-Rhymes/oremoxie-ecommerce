
import connectDB from '../../config/db';
import Order from '../../models/order';

connectDB();


export default async function handler(req, res){

    if(req.method === 'POST'){

        const {email, address, phoneNumber, products} = req.body;


        const order = await Order.create({email, address, phoneNumber, products});

        if(!order){

           return res.status(404).json({status: "Failure"});
        } 

        res.status(200).json({status: "Success", order});
        

    } else{

        res.status(200).json({message: "Working quite well"});
    }

}