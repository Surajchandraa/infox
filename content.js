function printsize(infoobj){
    const tableData = Object.keys(infoobj).map(file => {
        return {
            'File Name': file,
            'type':infoobj[file].type,
            'Size': infoobj[file].size
        };
    });
    
    
    console.table(tableData);
    }


function printmtime(infoobj){
    const tableData = Object.keys(infoobj).map(file => {
        return {
            'File Name': file,
            'type':infoobj[file].type,
            'modification_time': infoobj[file].mtime
        };
    });
    
    

    console.table(tableData);
    }



    function permission(infoobj){
        const tableData = Object.keys(infoobj).map(file => {
            return {
                'File Name': file,
                'type':infoobj[file].type,
                'permissions': infoobj[file].permissions
            };
        });
        
        
        console.table(tableData);
        }



        function printbtime(infoobj){
            const tableData = Object.keys(infoobj).map(file => {
                return {
                    'File Name': file,
                    'type':infoobj[file].type,
                    'birth_time': infoobj[file].btime
                };
            });
            
            
            console.table(tableData);
            }

         function paths(infoobj){
            const tableData = Object.keys(infoobj).map(file => {
                return {
                    'File Name': file,
                    'type':infoobj[file].type,
                    'path': infoobj[file].path
                };
            });
            
            
            console.table(tableData);
         }

    module.exports={printsize,printmtime,printbtime,permission,paths}