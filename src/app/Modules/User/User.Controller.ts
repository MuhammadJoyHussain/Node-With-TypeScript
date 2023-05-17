import { NextFunction, Request, Response } from "express"
import { createUserToDB, getAdminUserFromDB, getUserFromDB, getUsersFromDB } from "./User.Service"

export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB()

    res.status(200).json({
        status: 'success',
        data: user,
    })
}

export const getUser = async(req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const user = await getUserFromDB(id);

    res.status(200).json({
        status: 'success',
        data: user,
    })
}

export const getAdminUsers = async(req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUserFromDB();

    res.status(200).json({
        status: 'success',
        data: user,
    })
}

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const user = await createUserToDB(data)

    res.status(200).json({
        status: 'success',
        data: user,
    })
}
