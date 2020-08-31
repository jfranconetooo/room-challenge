import { listRooms, findRoomByGuid, createRoom, joinToRoom, leaveRoom, changeRoomHost } from "./service.js";

export const list = async (ctx) => {
    const { username } = ctx.request.query;
    return ctx.body = await listRooms(username);
}

export const getInfo = async(ctx) => {
    const { guid } = ctx.params;
    return ctx.body = await findRoomByGuid(guid);
}

export const create = async(ctx) => {
    const { body } = ctx.request;
    body.host_user = ctx.user._id;
    await createRoom(body);
    ctx.status = 201;
}


export const join = async(ctx) => {
    const { id } = ctx.params;
    await joinToRoom(id, ctx.user._id);
    ctx.status = 204;
}

export const leave = async (ctx) => {
    const { id } = ctx.params;
    await leaveRoom(id, ctx.user._id);
    ctx.status = 204;
}

export const changeHost = async (ctx) => {
    const { id } = ctx.params;
    await changeRoomHost(id, ctx.user._id);
    ctx.status = 204;
}