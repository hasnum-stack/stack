var http = require('http');
const officegen = require('officegen');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('🚀 ~ response', response);
    // response.writeHead(200, {
    //     'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    //     'Content-disposition': 'attachment; filename=surprise.pptx',
    // });

    // var pptx = officegen('pptx');

    // pptx.on('finalize', function (written) {
    //     // ...
    // });

    // pptx.on('error', function (err) {
    //     // ...
    // });
    // // ... (fill pptx with data)
    // pptx.generate(response);
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // response.end('响应内容');
}).listen(3000, () => {
    console.log('服务开启');
});

// // Create an empty Word object:
// let docx = officegen('docx');

// // Officegen calling this function after finishing to generate the docx document:
// docx.on('finalize', function (written) {
//     console.log('Finish to create a Microsoft Word document.');
// });

// // Officegen calling this function to report errors:
// docx.on('error', function (err) {
//     console.log(err);
// });

// // Create a new paragraph:
// let pObj = docx.createP();

// pObj.addText('Simple');
// pObj.addText(' with color', { color: '000088' });
// pObj.addText(' and back color.', { color: '00ffff', back: '000088' });

// pObj = docx.createP();

// pObj.addText('Since');
// pObj.addText('officegen 0.2.12', {
//     back: '00ffff',
//     shdType: 'pct12',
//     shdColor: 'ff0000',
// }); // Use pattern in the background.
// pObj.addText(' you can do ');
// pObj.addText('more cool ', { highlight: true }); // Highlight!
// pObj.addText('stuff!', { highlight: 'darkGreen' }); // Different highlight color.

// pObj = docx.createP();

// pObj.addText('Even add');
// pObj.addText('external link', { link: 'https://github.com' });
// pObj.addText('!');

// pObj = docx.createP();

// pObj.addText('Bold + underline', { bold: true, underline: true });

// pObj = docx.createP({ align: 'center' });

// pObj.addText('Center this text', {
//     border: 'dotted',
//     borderSize: 12,
//     borderColor: '88CCFF',
// });

// pObj = docx.createP();
// pObj.options.align = 'right';

// pObj.addText('Align this text to the right.');

// pObj = docx.createP();

// pObj.addText('Those two lines are in the same paragraph,');
// pObj.addLineBreak();
// pObj.addText('but they are separated by a line break.');

// docx.putPageBreak();

// pObj = docx.createP();

// pObj.addText('Fonts face only.', { font_face: 'Arial' });
// pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 });

// docx.putPageBreak();

// pObj = docx.createP();

// // We can even add images:
// // pObj.addImage('some-image.png');
// // Let's generate the Word document into a file:

// let out = fs.createWriteStream('./word/example.docx');

// out.on('error', function (err) {
//     console.log(err);
// });

// // Async call to generate the output file:
// docx.generate(out);
