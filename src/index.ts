import * as core from "@actions/core";

const html = `
<font color="green">Hi, My Name is Prateek jain</font>
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
