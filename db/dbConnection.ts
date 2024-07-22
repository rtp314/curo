import { createMiddleware } from 'hono/factory';
import { Db, MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_CONNECTION_STRING!);

const dbMiddleware = createMiddleware<{ Variables: { db: Db } }>(async (c, next) => {
  try {
    await client.connect();
    const db = client.db('curo');
    c.set('db', db);
    await next();
  } catch (error) {
    return c.json({ status: 'error', message: 'db connection error' });
  }
});

export default dbMiddleware;

export { client };
