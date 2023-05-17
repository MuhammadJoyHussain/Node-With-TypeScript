import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./User.Interface";

// type UserModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String, 
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {type: String, required: true},
    role: {type: String, required: true, unique: true},
    password: {type: String, required: true}, 
    dateOfBirth: {type: String, require: true},
    gender: {type: String, enum:['male', 'female'], required: true},
    contactNo: {type: String, required: true},
    emergyncyContactNo: {type: String, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true}
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
    const admins = this.find({role: 'admin'});
    return admins;
})

userSchema.method("fullName", function fullName() {
    return this.name.firstName+" "+this.name.lastName;
})

const User = model<IUser, UserModel>("User", userSchema);

export default User;
