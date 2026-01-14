import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;
    onModuleInit(){
        this.isConnected=true;
        console.log('Database Connected');
    }//ei service ta initialize houar sathe sathe eita run korbe
    onApplicationShutdown(signal: string){
        this.isConnected=false;
        console.log(`Database disconnected due to app Shutdown. Signal ${signal}`)

    }
    getStatus(){
        return this.isConnected? 'Connected':'Disconnected';
    }
}
