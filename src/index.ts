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
    .addLink("DeazyQR", "https://deazyqr.vercel.app/").addRaw("<h1>Hi prateek</h1><pre>Looks great</pre>").addSeparator().write();
  core.debug("hello");
};

run();
