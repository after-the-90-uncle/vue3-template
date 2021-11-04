const path = require("path");
module.exports = {
	// devServer: {
	//     inline: true,
	//     hot: true,
	//     stats: 'minimal',
	//     contentBase: __dirname,
	//     overlay: true,
	//     historyApiFallback: true
	// },
	
	configureWebpack: {
	    resolve: {
	    	alias:{
				"@":path.resolve(__dirname,"./")
			},
	    }
	},
	css:{
		loaderOptions: {
	      postcss: {
	        // 这里的选项会传递给 postcss-loader
	        plugins: () => [
                require('autoprefixer') ({
                    overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                })
            ]
	        
	      }
	    }
	}

	
}