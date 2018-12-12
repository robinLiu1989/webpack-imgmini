# webpack-imgmini
a image compress  use webpack

运用webpack批量压缩图片的小工具，支持png,jpg,gif，对大图片压缩效果较好

一、下载依赖：
1. 新建项目目录 mkdir demo

2. cd demo && npm init -y 

3. npm i webpack-imgmini  --save



二、使用步骤：
1. mkdir img && mkdir output
   在img目录中放入，你想要压缩的图片或目录，也可以包含其他类型的文件

2. touch copyin
   在里面写入以下内容
   
    const copydir=require('webpack-imgmini/copydir')
  
    copydir('./img/','./node_modules/webpack-imgmini/img/')

3. touch copyout
    在里面写入以下内容
     
    const copydir=require('webpack-imgmini/copydir')
    
    copydir('./node_modules/webpack-imgmini/dist/img/','./output/')

4. 在package.json的script中加入以下命令

    "copyIn":"node copyin.js",
    
    "copyOut":"node copyout.js",
    
    "build":"webpack --config  ./node_modules/webpack-imgmini/webpack.config.js --color --progress ",
    
    "start":"npm run copyIn && npm run build && npm run copyOut"

 三、 运行：
     npm run start

