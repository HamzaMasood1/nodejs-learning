var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, field, files) {
            res.write('File uplaoded');
            res.end();
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method = "post" enctype = "multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit"');
        res.write('</form>');
        return res.end();

    }
}).listen(8080);