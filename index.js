#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const for_directory=require('./directory');



let infoobj ={};
let fileprocessed=0;
function directorycontent(directorypath){
   


fs.readdir(directorypath,(err,files)=>{
    if(err){
        console.log("unable to loading the files");
        return 
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
                'mtime': `${dir_lmd}T${dir_lmt}`,
                'permissions':per,
                'btime':`${dir_crd}T${dir_crt}` };
                    fileprocessed++;

                    if (fileprocessed === files.length) {
                        console.table(infoobj);
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
                'mtime': `${lastModified}T${lastModified_time}`,
                'permissions':permissions,
                'btime':`${ctimee}T${ctime_time}` };
                fileprocessed++;

                if (fileprocessed === files.length) {
                    console.table(infoobj);
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





let givepath=process.argv[2];
directorycontent(givepath)
