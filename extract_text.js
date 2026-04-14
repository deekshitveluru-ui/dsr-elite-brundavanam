const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:\\Users\\velur\\.gemini\\antigravity\\scratch\\dsr-elite-brundavanam\\public\\DSR_Elite_Brundhavanam.pdf');

function render_page(pageData) {
    let render_options = {
        normalizeWhitespace: false,
        disableCombineTextItems: false
    }

    return pageData.getTextContent(render_options)
    .then(function(textContent) {
        let lastY, text = '';
        for (let item of textContent.items) {
            if (lastY == item.transform[5] || !lastY){
                text += item.str;
            }  
            else{
                text += '\n' + item.str;
            }    
            lastY = item.transform[5];
        }
        return text;
    });
}

let options = {
    pagerender: render_page
}

pdf(dataBuffer, options).then(function(data) {
    const pages = data.text.split('\n\n\n'); // This splitter highly depends on how the PDF text layout renders but let's just log the whole file or parts of it
    console.log("Extracted text (showing raw output)");
    console.log(data.text);
});
