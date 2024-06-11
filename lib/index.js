"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core = __importStar(require("@actions/core"));
const html = `
<svg fill="none" viewBox="0 0 600 300" width="600" height="300" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
<div style="border-radius: 0.5rem; border: 1px solid #e5e7eb; background-color: #f9fafb; color: #374151; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); width: 100%; max-width: 48rem;">
<div style="display: flex; flex-direction: column; space-y: 0.375rem; padding: 1.5rem; align-items: center; justify-content: space-between;">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="width: 1.5rem; height: 1.5rem;"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
    <div>
      <h3 style="white-space: nowrap; font-size: 1.5rem; font-weight: 600; line-height: 1; letter-spacing: -0.025em;">
        GitHub Actions Workflow
      </h3>
      <p style="font-size: 0.875rem; color: #6b7280;">Summary of the latest workflow run</p>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <div style="border-radius: 9999px; background-color: #dcfce7; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: #16a34a;">
      Success
    </div>
    <div style="font-size: 0.875rem; color: #6b7280;">2 minutes ago</div>
  </div>
</div>
<div style="padding: 1.5rem;">
  <div style="display: grid; gap: 1rem;">
    <div style="display: grid; gap: 0.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="width: 1.25rem; height: 1.25rem; color: #16a34a;"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          <div>Install Dependencies</div>
        </div>
        <div style="border-radius: 9999px; background-color: #dcfce7; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: #16a34a;">
          Passed
        </div>
      </div>
      <div style="font-size: 0.875rem; color: #6b7280;">Installed all required dependencies</div>
    </div>
    <div style="display: grid; gap: 0.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="width: 1.25rem; height: 1.25rem; color: #f59e0b;"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <div>Run Linter</div>
        </div>
        <div style="border-radius: 9999px; background-color: #fef9c3; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: #ca8a04;">
          Warning
        </div>
      </div>
      <div style="font-size: 0.875rem; color: #6b7280;">Linter found some minor issues</div>
    </div>
    <div style="display: grid; gap: 0.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="width: 1.25rem; height: 1.25rem; color: #ef4444;"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <div>Run Tests</div>
        </div>
        <div style="border-radius: 9999px; background-color: #fce7e7; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: #dc2626;">
          Failed
        </div>
      </div>
      <div style="font-size: 0.875rem; color: #6b7280;">Some tests failed, see logs for details</div>
    </div>
    <div style="display: grid; gap: 0.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="width: 1.25rem; height: 1.25rem; color: #2563eb;"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <div>Deploy to Production</div>
        </div>
        <div style="border-radius: 9999px; background-color: #dbeafe; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; color: #1d4ed8;">
          In Progress
        </div>
      </div>
      <div style="font-size: 0.875rem; color: #6b7280;">Deploying the latest changes to production</div>
    </div>
  </div>
</div>
</div>
</foreignObject>
</svg>
`;
const run = () => {
    core.summary.addHeading("hello prateek").write();
    core.summary
        .addQuote("hkjhjhkj")
        .addBreak()
        .addCodeBlock("coede block")
        .addDetails("open details", "nice detail")
        .addHeading("Summary headline")
        .addImage("../images/qrimage.png", "QR code")
        .addLink("DeazyQR", "https://deazyqr.vercel.app/")
        .addRaw(html)
        .addSeparator()
        .write();
};
exports.run = run;
(0, exports.run)();
