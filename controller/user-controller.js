import { request, response } from "express";
import User from "../model/User.js"

export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub }) // if i take one value from database(mongo db)

        if (exist) {
            response.status(200).json({ msg: "user already exist" })
            return;
        } else {
            const newUser = new User(request.body)
            await newUser.save();
            console.log(request.body);
            return response.status(200).json(newUser)
        }

    } catch (error) {
        return response.status(500).json(error.message)
    }
}
export const getUsers = async (request, response) => {
    try {
        const users = await User.find({}) // if i take all data from mongodb then we have used find
        return response.status(200).json(users)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}


