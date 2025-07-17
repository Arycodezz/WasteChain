import mongoose from "mongoose"

const connectToDB = async () => {
    const connectionUrl = `mongodb+srv://ranjanaryan99:${process.env.password}@cluster0.mhbvewc.mongodb.net/`;
    mongoose
        .connect(connectionUrl)
        .then(() => console.log("Connected to DB successfully"))
        .catch(error => console.log(error))
}

export default connectToDB;
