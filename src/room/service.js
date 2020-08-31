import Rooms from './model.js';
import Users from '../users/model.js';
import pkg from 'lodash';
const { isEmpty } = pkg;

export const listRooms = async (username) => {
    const query = {};
    if(username) {
        const users = await Users.find({username: { 
            $regex: username,
            $options: 'i' }
        }, '_id');

        query['$or'] = [
            { participants: { $in: users}},
            {host_user: {$in: users}}
        ]
    }

    return await Rooms.find(query).populate({
        path: 'participants',
        select: '_id username'
    }).populate({
        path: 'host_user',
        select: '_id username'
    });
}

export const findRoomByGuid = async (guid) => {
    const room = await Rooms.findOne({ guid }, '_id name participants guid host_user capacity_limit')
    .populate({
        path: 'host_user',
        select: '_id username'
    })
    .populate({
        path: 'participants',
        select: '_id username'
    });
    if(!room) throw new Error("ERROR:NOT_FOUND");
    return room;
}

export const createRoom = async (body) => {
    try {
        const room = new Rooms(body);
        await room.save();
    } catch (error) {
        throw new Error();
    }
}

export const joinToRoom = async (_id, userId) => {
    const room =  await Rooms.findById(_id).
    populate({
        path: 'participants',
        select: '_id username'
    });
    if(!room) throw new Error("ERROR:NOT_FOUND");

    if(room.participants.length >= room.capacity_limit) throw new Error("ERROR:ROOM_REACHED_LIMIT");
    
    let isAlreadyParticipating;
    room.participants.forEach(u => {
        if(JSON.stringify(u._id) === JSON.stringify(userId)) isAlreadyParticipating = true;
    });
    if(isAlreadyParticipating) return;

    room.participants.push(userId);
    await room.save();
}

export const leaveRoom = async (_id, userId) => {
    const room =  await Rooms.findOne({ _id, participants: {
        $in: [userId]
    }})
    .populate({
        path: 'participants',
        select: '_id username'
    });
    if(!room) throw new Error("ERROR:NOT_FOUND");

    room.participants = room.participants.filter(u => JSON.stringify(u._id) !== JSON.stringify(userId));
    await room.save();
}

export const changeRoomHost = async (_id, userId) => {
    const room =  await Rooms.findOne({ _id, host_user: userId}).populate({
        path: 'participants',
        select: '_id username'
    });
    if(!room) throw new Error("ERROR:NOT_FOUND");

    if(isEmpty(room.participants)) throw new Error("ERROR:CANT_CHANGE_HOST");

    const newHostUser = Math.floor(Math.random() * room.participants.length);
    room.host_user = room.participants[newHostUser];
    room.participants = room.participants.filter(u => JSON.stringify(u._id) !== JSON.stringify(room.host_user._id));
    room.participants.push(userId);
    await room.save();
}