import { ObjectId } from 'mongodb';
import { client } from './index.js';

export async function updateShirtById(id, data) {
  return await client
    .db("shirts")
    .collection("shirtcollection")
    .updateOne({_id:ObjectId(id ) }, { $set: data });
}
export async function deleteShirtById(id) {
  return await client
    .db("shirts")
    .collection("shirtcollection")
    .deleteOne({_id:ObjectId(id ) });
}
export async function addShirt(data) {
  return await client
    .db("shirts")
    .collection("shirtcollection")
    .insertMany(data);
}
export async function getShirtById(id) {
  return await client
    .db("shirts")
    .collection("shirtcollection")
    .findOne({_id:ObjectId(id ) });
}
export async function getShirt(color) {
  return await client
    .db("shirts")
    .collection("shirtcollection")
    .find(color)
    .toArray();
}
