const path = require('path')

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            // 哪些文件自动引入，使用绝对路径
            // 需要是path.join来拼接完整路径
            patterns: [
                path.join(__dirname, './src/assets/styles/variables.less'),
                path.join(__dirname, './src/assets/styles/mixins.less')
            ]
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(jpg|png|gif)$/)
            .set('parser', {
                dataUrlCondition: {
                    maxSize: 10 * 1024 // 10KiB
                }
            })
    },
    devServer: {
        allowedHosts: ['www.corho.com']
    },
    // 这个是设置外部扩展，模块为qc变量名为QC，导入qc将不做打包。
    configureWebpack: {
        externals: {
            qc: 'QC'
        }
    },

}