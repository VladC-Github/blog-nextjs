import { createClient } from '@vercel/postgres';

export async function connectToDB() {
    const client = createClient();
    await client.connect();

    try {
        if (client) {
            console.log("connected");
            return client;
        }
    } catch (error) {
        console.log('Error connecting to DB', error);
    }
}
