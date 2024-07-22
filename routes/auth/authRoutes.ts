import factory from '../../factory/factory.js';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET!);

const app = factory.createApp();

app.post('login', async c => {
  const db = c.get('db').collection('users');
  const { email, password } = await c.req.json();
  if (!email) return c.json({ status: 'error', message: 'email is required' });
  if (!password) return c.json({ status: 'error', message: 'password is required' });

  const user = await db.findOne({ email });
  const passwordMatches = await Bun.password.verify(user?.password, password);
  if (!passwordMatches) return c.json({ status: 'error', message: 'invalid login' });

  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 12);

  const jwt = await new SignJWT({ email }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime(expiry).sign(secret);

  c.header('Set-Cookie', `curo-token=${jwt}; Expires=${expiry.toUTCString()}; Path=/`);

  return c.json({ status: 'ok' });
});

app.post('/signup', async c => {
  const db = c.get('db').collection('users');
  const { email, password } = await c.req.json();
  if (!email) return c.json({ status: 'error', message: 'email is required' });
  if (!password) return c.json({ status: 'error', message: 'password is required' });

  const user = await db.findOne({ email });
  if (user) return c.json({ status: 'error', message: 'user already exists' });

  const hashedPassword = await Bun.password.hash(password);

  await db.insertOne({ email, password: hashedPassword });

  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 12);

  const jwt = await new SignJWT({ email }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime(expiry).sign(secret);

  c.header('Set-Cookie', `curo-token=${jwt}; Expires=${expiry.toUTCString()}; Path=/`);

  return c.json({ status: 'ok' });
});

export default app;
