import userModel from "../models/user"
import {
    create,
    deleteOneById,
    getAll,
    getOneById,
    updateOneById
} from "./globalController"

export const createUser= create(userModel)
export const getAllUser= getAll(userModel)
export const getOneUser= getOneById(userModel)
export const updateOneUser= updateOneById(userModel)
export const deleteOneUser= deleteOneById(userModel)
