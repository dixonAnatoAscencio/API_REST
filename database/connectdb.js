import mongoose from "mongoose";


try {
    await mongoose.connect( process.env.URI_MONGO);
    console.log('Connect db ok')
} catch (error) {
    console.log("Error de conexión a mongodb: " + error);
}
 