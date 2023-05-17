import { IUser } from "./User.Interface";
import User from "./User.Model";

export const getUsersFromDB = async(): Promise<IUser[]> => {
    const users = await User.find();

    return users;
}

export const getUserFromDB = async(payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload});

    return user;
}

export const createUserToDB = async(payload:IUser):Promise<IUser> => {
    const user = await new User(payload)

    await user.save();
    console.log(user.fullName());
    return user;
}

export const getAdminUserFromDB = async() => {
    const admins = await User.getAdminUsers();
    return admins;
}