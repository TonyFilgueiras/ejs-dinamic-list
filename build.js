const ejs = require('ejs');
const fs = require('fs-extra'); // Only require 'fs-extra' as it includes 'fs' functionalities
const path = require('path');

// Directory where EJS files are stored
const viewsDir = path.join(__dirname, 'views');

// Directory where static HTML will be output
const outputDir = path.join(__dirname, 'dist');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Copy static assets like CSS, JS, images to the 'dist/public' directory
fs.copySync('public', 'dist/');
console.log('Static assets copied.');

// Read your EJS files and render them as HTML
fs.readdirSync(viewsDir).forEach(file => {
  if (file.endsWith('.ejs')) {
    const filePath = path.join(viewsDir, file);
    const outputFile = path.join(outputDir, file.replace('.ejs', '.html'));

    // Render EJS file
    const template = fs.readFileSync(filePath, 'utf-8');
    const html = ejs.render(template);

    // Write the HTML output
    fs.writeFileSync(outputFile, html);
    console.log(`Generated: ${outputFile}`);
  }
});
