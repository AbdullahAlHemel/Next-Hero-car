import { connectDB } from "@/app/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async (request,{params}) => {
   const db = await connectDB()
   const bookingsCollection = db.collection('bookings')
   try {
    const resp =  await bookingsCollection.deleteOne({ _id: new ObjectId(params.id)})
    return Response.json({ message: 'Deleted The Booking', response: resp});
   } catch (error) {
    return Response.json({message: 'something went wrong'})
   }
}

export const PATCH = async (request,{params}) => {
   const db = await connectDB()
   const bookingsCollection = db.collection('bookings');
   const updateDoc = await request.json();
   try {
    const resp =  await bookingsCollection.updateOne(
         { _id: new ObjectId(params.id)},
         {
            $set : {
               ...updateDoc
            },
         },
         {
            upsert : true
         })
    return Response.json({ message: 'Updated The Booking', response: resp});
   } catch (error) {
    return Response.json({message: 'something went wrong'})
   }
}

export const GET = async (request,{params}) => {
   const db = await connectDB()
   const bookingsCollection = db.collection('bookings')
   try {
    const resp =  await bookingsCollection
    .findOne({ _id: new ObjectId(params.id)})
    return Response.json({ message: 'Booking Found', data: resp});
   } catch (error) {
    return Response.json({message: 'something went wrong'})
   }
}