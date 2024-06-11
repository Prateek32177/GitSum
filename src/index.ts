import * as core from "@actions/core"

export const run = ()=>{
core.summary.addHeading("hello prateek").write();
core.summary.addQuote("hkjhjhkj")
}

run();