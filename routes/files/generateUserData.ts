import { Db, ObjectId } from 'mongodb';
import { DocumentData } from './types.js';

export default async function generateUserData(db: Db, userId: string): DocumentData {
  const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
  if (!user) throw new Error('User not found');

  const allVolunteers = await db.collection('users').find({ includeInVolunteerList: true }).toArray();
}
