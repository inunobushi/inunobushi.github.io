import * as cluster from "cluster";
import {cpus} from "os";
import {server} from "./server";

if(cluster.isMaster){
    const numCPUs = cpus().length;

    for(let i = 0; i < numCPUs; i+= 1){
        cluster.fork();
    }
}else{
    let app = new server();
}