import "dotenv/config";

import app from "./app";
import {pool} from "./config/db.js";

const server =  app.listen(Number(process.env.POST) || 3000,()=>{
    console.log("server running on port 3000");

})

function shutdonw (){
    server.close(()=>{
        void pool.end().then(()=>process.exit(0));
    })
}

process.on("SIGINT",shutdonw)
process.on("SIGTERM", shutdonw)