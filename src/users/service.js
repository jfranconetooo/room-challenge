import Users from './model.js';

export const listUsers = async (username) => {
    const query = {};
    if(username) query['username'] = {
        $regex: username,
        $options: 'i'
    }

    return await Users.find(query);
}

export const createUser = async (body) => {
    try {
        const user = new Users(body);
        await user.save();
        delete user.password;
        return user;
    } catch (error) {
        throw error;
    }
}

export const updateUserById = async (_id, user) => {
    const userUpdated = await Users.findOne({ _id });
    if(!userUpdated) throw new Error("ERROR:NOT_FOUND");
    Object.assign(userUpdated, user);
    await userUpdated.save();
    return userUpdated;
}

export const removeUser = async (_id) => {
    await Users.findOneAndDelete({_id});
}

export const findUserByUserName = async (username, bringPassword = false) => {
    const user = await Users.findOne({username}, `_id username ${bringPassword? 'password': ''} mobile_token`);
    if(!user) throw new Error("ERROR:NOT_FOUND");
    return user;
}