const fs = require('fs');

// Read CSS file
const cssContent = fs.readFileSync('styles.min.css', 'utf8');

// Extract class names
const classNames = cssContent.match(/(?:^|\s)(?:bg|text|border|rounded)-[a-zA-Z]+(?:-\d+)?/g);
console.log('classNames:', classNames);

// Process class names
const processedClassNames = classNames.map(className => {
  return className.replace(/^-/, '').replace(/-\d+$/, '');
});
console.log('processedClassNames:', processedClassNames);

// Remove duplicates
const uniqueClassNames = [...new Set(processedClassNames)];
console.log('uniqueClassNames:', uniqueClassNames);

// Write to file
fs.writeFileSync('result.txt', 'Processed CSS class names:\n\n```' + uniqueClassNames.join('\n') + '```', 'utf8');
