#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const for_directory=require('./directory');
const {printsize,printmtime,printbtime,permission,paths}= require('./content')



let infoobj ={};
let fileprocessed=0;
function directorycontent(directorypath,callback){
   


fs.readdir(directorypath,(err,files)=>{
    if(err){
        console.log("unable to loading the files");
        return callback(err);
    }
   
    files.forEach(file=>{
        let paths = path.join(directorypath,file);

        fs.stat(paths,(err,stats)=>{
            if(err){
                console.log("cant get file info");
                return;
            }


            if(stats.isDirectory()){
                let dirsize = for_directory(paths);
                let unit='byte'
                if(dirsize>=1048576){
                    dirsize=(dirsize/1048576).toFixed(1);
                    unit='mb'
                }
                else{
                dirsize=(dirsize/4096).toFixed(1);
                unit='kb'

                }
                let dir_lmd = stats.mtime.toLocaleDateString();

                let dir_lmt=stats.mtime.toLocaleTimeString();

                let per=getPermissionsString(stats.mode);

                let dir_crd=stats.birthtime.toLocaleDateString();
                
                let dir_crt=stats.birthtime.toLocaleTimeString();
                infoobj[file] = { 'type':'dir',
                'size': `${dirsize} ${unit}`, 
                'mtime': `${dir_lmd} T ${dir_lmt}`,
                'permissions':per,
                'btime':`${dir_crd} T ${dir_crt}`,
                'path':`${paths}` };
                    fileprocessed++;

                    if (fileprocessed === files.length) {
                        callback(null, infoobj);
                    }
                    
            }
            else{

                
                let fileSize = stats.size;
                let unit ='b';

                if(fileSize>=1024){
                    fileSize=(fileSize/1024).toFixed(1);
                    unit='kb'
                }

                let lastModified = stats.mtime.toLocaleDateString();

                let lastModified_time=stats.mtime.toLocaleTimeString();

                let permissions=getPermissionsString(stats.mode);

                let ctimee=stats.birthtime.toLocaleDateString();

                let ctime_time=stats.birthtime.toLocaleTimeString();

                infoobj[file] = { 'type':'file',
                'size': `${fileSize} ${unit}`, 
                'mtime': `${lastModified} T ${lastModified_time}`,
                'permissions':permissions,
                'btime':`${ctimee} T ${ctime_time}`,
                'path':`${paths}` };
                fileprocessed++;

                if (fileprocessed === files.length) {
                    callback(null, infoobj);
                }
                
            }
        })
    })
})
}


function getPermissionsString(mode) {
    const permissions = [
        (mode & 0o400 ? 'r' : '-'),
        (mode & 0o200 ? 'w' : '-'),
        (mode & 0o100 ? 'x' : '-'),
        (mode & 0o040 ? 'r' : '-'),
        (mode & 0o020 ? 'w' : '-'),
        (mode & 0o010 ? 'x' : '-'),
        (mode & 0o004 ? 'r' : '-'),
        (mode & 0o002 ? 'w' : '-'),
        (mode & 0o001 ? 'x' : '-')
    ];

    return permissions.join('');
}




let input=process.argv[2];
let givepath=process.argv[3];



if (input === 'size') {
    directorycontent(givepath, (err, infoobj) => {
        if (err) {
            console.error(err);
            return;
        }
        printsize(infoobj)
    });
}
else if(input==='permission'){
    directorycontent(givepath,(err,infoobj)=>{
        if(err){
            console.error(err);
            return;
        }
        permission(infoobj)
    })
}
else if(input==='mtime'){
    directorycontent(givepath,(err,infoobj)=>{
        if(err){
            console.error(err);
            return;
        }
        printmtime(infoobj)
    })
}
else if(input==='btime'){
    directorycontent(givepath,(err,infoobj)=>{
        if(err){
            console.error(err);
            return;
        }
        printbtime(infoobj)
    })
}
else if(input==='all'){
    directorycontent(givepath,(err,infoobj)=>{
        if(err){
            console.error(err);
            return;
        }
        console.table(infoobj)
    })
}
else if(input==='path'){
    directorycontent(givepath,(err,infoobj)=>{
        if(err){
            console.error(err);
            return;
        }
        paths(infoobj)
    })
}
else{
    console.log("invalid command")
}
