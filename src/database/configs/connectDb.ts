import { datasource } from "./datasource";

async function connectDb() {
        
    if (!datasource.isInitialized) {
        try {
            
            await datasource.initialize();
            console.log("connected to datasource")

        } catch (error) {

            console.log("error in connect datasourse: ", error.message);
            
        }
    } else {
        console.log("already connected to datasource")
    }

}

export { connectDb }