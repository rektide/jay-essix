module.exports= function echo(attr, children){
	console.log(attr)
	children.on("data", function(data){
		console.log(data)
	})
	return new Promise(function(resolve, reject){
		children.on("end", resolve)
	})
}
