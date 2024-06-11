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
exports.logInfo = void 0;
const core = __importStar(require("@actions/core"));
const ColorReset = "\x1b[0m";
var TextEffect;
(function (TextEffect) {
    TextEffect["Bright"] = "\u001B[1m";
    TextEffect["Dim"] = "\u001B[2m";
    TextEffect["Underscore"] = "\u001B[4m";
    TextEffect["Blink"] = "\u001B[5m";
    TextEffect["Reverse"] = "\u001B[7m";
    TextEffect["Hidden"] = "\u001B[8m";
})(TextEffect || (TextEffect = {}));
var ForegroundColor;
(function (ForegroundColor) {
    ForegroundColor["Black"] = "\u001B[30m";
    ForegroundColor["Red"] = "\u001B[31m";
    ForegroundColor["Green"] = "\u001B[32m";
    ForegroundColor["Yellow"] = "\u001B[33m";
    ForegroundColor["Blue"] = "\u001B[34m";
    ForegroundColor["Magenta"] = "\u001B[35m";
    ForegroundColor["Cyan"] = "\u001B[36m";
    ForegroundColor["White"] = "\u001B[37m";
})(ForegroundColor || (ForegroundColor = {}));
function logInfo(message) {
    const textFormat = `${TextEffect.Underscore}${ForegroundColor.Cyan}`;
    core.summary.addCodeBlock(`${textFormat}${message}${ColorReset}`).write();
}
exports.logInfo = logInfo;
