"use server";
import { BlogType } from "@/types/types";
import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.DB_URI) {
    throw new Error("Mongo Db Uri not found");
}
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const db = await getDb("next-app-db");
async function getDb(dbName: string) {
    try {
        await client.connect();
        return client.db(dbName);
    } catch (error) {
        console.log(error);
    }
}

export async function getCollection(collectionName: string) {
    if (db) return db.collection(collectionName);

    return null;
}

export async function getBlogs() {
    if (db) {
        const blogs = db.collection<BlogType>("blogs").find().toArray();
        const plainBlogs = (await blogs).map(({ _id, userId }) => {
            return {
                _id: _id.toString(),
                userId: userId.toString(),
            };
        });

        return plainBlogs;
    }
}
