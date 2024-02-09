const http= require('http');
const PORT=3000



const server= http.createServer(function exec(request,response){
    response.end('hello world')
});

server.listen(PORT, function process() {
    console.log('server started at port ',PORT)

})