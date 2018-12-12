# webpack-imgmini
a image compress  use webpack

运用webpack批量压缩图片的小工具

使用步骤：
1. 新建项目目录 mkdir demo

2. cd demo && npm init -y 

3. npm i --save

4. mkdir img && mkdir output
   将要压缩的图片放入img

5. touch copyin
   在里面写入以下内容
    const copydir=require('webpack-imgmini/copydir')

    copydir('./img/','./node_modules/webpack-imgmini/img/')

6. touch copyput
     在里面写入以下内容
    const copydir=require('webpack-imgmini/copydir')

    copydir('./node_modules/webpack-imgmini/dist/img/','./output/')

7.在package.json的script中加入以下命令
    "copyIn":"node copyin.js",
    "copyOut":"node copyout.js",
    "build":"webpack --config  ./node_modules/webpack-imgmini/webpack.config.js --color --progress ",
    "start":"npm run copyIn && npm run build && npm run copyOut"

8.运行：npm run start

