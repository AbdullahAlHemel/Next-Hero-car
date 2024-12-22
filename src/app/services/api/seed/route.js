import { connectDB } from "@/app/lib/connectDB"
import { services } from "@/app/lib/Service";

export const GET = async () => {
    const db = await connectDB()
    const serviceCollection = db.collection('services')
    try {
        await serviceCollection.deleteMany();
        const resp = await serviceCollection.insertMany(services);
        return Response.json({message: 'Seeded successfully'})
    } catch (error) {
        console.log(error);
    }
}