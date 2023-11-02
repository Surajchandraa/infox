const fs = require('fs');
const path = require('path');

function for_directory(paths){
    let directory_size = 0;

    const files = fs.readdirSync(paths);

    files.forEach(file => {
        let path_of = path.join(paths, file);
        const stats = fs.statSync(path_of);

        if (stats.isDirectory()) {
            directory_size += for_directory(path_of); 
            if (stats.size === 4096) {
                
                directory_size += 4096;
            }
        } else {
            directory_size += stats.size; 
        }
    });

    return directory_size;
}

module.exports = for_directory;
