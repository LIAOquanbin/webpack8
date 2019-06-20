// 处理路径模块
var path=require('path');

module.exports={
    // 模式
    mode:"development",
    
    // 配置入口 压缩的js文件名
    entry:{
        Img:"./app/app.js"
    },
    // 配置输出
    output:{
        // 文件输出路径 压缩出来的文件夹名称
        path:path.resolve(__dirname+'/image')
    },
    module:{
        rules:[
            // url-loader 处理图片路径
            {
                // 匹配文件后缀名的正则
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        // 将1000b以内的图片转为base64
                        options:{limit:1000}
                    }
                ]
            }
        ]
    }

}