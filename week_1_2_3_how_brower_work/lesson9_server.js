const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.log(err)
  }).on('data', (chunk) => {
    body.push(chunk);
    // body.push(chunk.toString())
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body:', body);
    response.writeHead(200, { 'Content-type': 'text/html' });
    // response.end(' Hello world\n');
    response.end(
`<html maaa=a >
<head>
    <style>
#container {
    width:500px;
    height:300px;;
    display:flex;
}
#container #myid{
    width:200px;
}
#container .c1{
    flex:1;
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid"/>
        <div class="c1" />
    </div>
</body>
</html>`);
//     response.end(
// `<html maaa=a >
// <head>
//     <style>
// body div #myid{
//   width: 100px;
//   backrground-color: #ff5000;
// }
// body div img{
//   width: 30px;
//   backrground-color: #ff1111;
// }
//     </style>
// </head>
// <body>
//     <div>
//         <img id="myid"/>
//         <img />
//     </div>
// </body>
// </html>`);
  })

}).listen(8088);

console.log('server started')