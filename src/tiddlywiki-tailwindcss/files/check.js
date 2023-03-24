const fs = require("fs");

// 读取style.min.css文件
const cssText = fs.readFileSync("styles.min.css", "utf-8");

// 匹配所有的类名
const classNames = cssText.match(/\.[\w-]+/g);

// 去重并排序
const uniqueClassNames = [...new Set(classNames)].sort();

// 去除伪类（如:hover）和点，并去除数字开头的类名
const filteredClassNames = uniqueClassNames
  .map((name) => name.split(":")[0].replace(".", ""))
  .filter((name) => isNaN(name[0]));

// 每个表格不超过10行
const tableRows = [];
for (let i = 0; i < filteredClassNames.length; i += 3) {
  tableRows.push(filteredClassNames.slice(i, i + 3));
}

// 写入markdown文件
fs.writeFileSync(
  "docs/output.md",
  tableRows
    .map(
      (rows) => `
| Class Name | Description | Example |
| --- | --- | --- |
${rows.map((name) => `| ${name} | | |`).join("\n")}
`
    )
    .join("\n")
);