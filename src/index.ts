import * as core from "@actions/core";

const html = `
<!DOCTYPE html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Document</title> 
</head> 
<body> 
	<!—Inline code—> 
	<p style="color: green">Hello, World! </p>  
</body> 
</html> 
`;

export const run = () => {
  core.summary.addHeading("hello prateek").write();
  core.summary
    .addQuote("hkjhjhkj")
    .addBreak()
    .addCodeBlock("coede block")
    .addDetails("open details",html)
    .addHeading("Summary headline")
    .addLink("DeazyQR", "https://deazyqr.vercel.app/")
    .addRaw(html)
    .addSeparator()
    .write();
};

run();
