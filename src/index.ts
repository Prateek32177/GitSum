import * as core from "@actions/core";
export const run = () => {
  core.summary.addHeading("hello prateek").write();
  core.summary
    .addQuote("hkjhjhkj")
    .addBreak()
    .addCodeBlock("coede block")
    .addDetails("open details", "nice detail")
    .addHeading("Summary headline")
    .addImage("../images/qrimage.png", "QR code")
    .addLink("DeazyQR", "https://deazyqr.vercel.app/").addRaw(html).addSeparator().write();
    core.setOutput("html summary",html);
  core.debug("hello");
};

run();


const html = `<div><h1>GitHub Action Workflow Summary</h1>
<div style='margin-bottom: 10px; padding: 10px; border: 1px solid #ccc; background-color: #f8f8f8;'>
  <p style='color: #333;'>This is a summary of the GitHub Action workflow.</p>
  <div style='background-color: #fdd; padding: 5px; margin-bottom: 5px;'>
    <p style='color: #900;'>Error: Something went wrong.</p>
  </div>
  <div style='background-color: #ffecb3; padding: 5px; margin-bottom: 5px;'>
    <p style='color: #f57c00;'>Warning: Proceed with caution.</p>
  </div>
  <div style='background-color: #e6f7ff; padding: 5px; margin-bottom: 5px;'>
    <p style='color: #2196f3;'>Info: This is just an informational message.</p>
  </div>
</div></div>`