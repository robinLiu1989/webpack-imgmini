
var fs=require('fs');


function mkdir(path) {
    fs.mkdir(path,function(err){

        if (err) {
            console.log('目录创建失败')
            return null;

        }

        console.log("目录创建成功。");

    });
}



module.exports=mkdir