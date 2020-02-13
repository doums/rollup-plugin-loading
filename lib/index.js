"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ora_1 = __importDefault(require("ora"));
var path_1 = __importDefault(require("path"));
var spinner = ora_1["default"]({
    spinner: 'hamburger',
    color: 'red',
    indent: 4,
    stream: process.stdout
});
function loading(options) {
    return {
        name: 'loading',
        buildStart: function () {
            if (options) {
                var spinnerType = options.spinner, color = options.color, indent = options.indent;
                if (spinner) {
                    spinner.spinner = spinnerType;
                }
                if (color) {
                    spinner.color = color;
                }
                if (indent && indent >= 0) {
                    spinner.indent = indent;
                }
            }
            spinner.text = 'build started';
            spinner.start();
        },
        transform: function (code, id) {
            var width = process.stdout.columns;
            var spinnerWidth = options && options.width || 1;
            var offset = spinner.indent + spinnerWidth + 1;
            var text = path_1["default"].relative(__dirname, id);
            if (text.length + offset > width) {
                text = text.slice((text.length + offset + 3) - width);
                spinner.text = "..." + text;
            }
            else {
                spinner.text = text;
            }
            spinner.render();
            return null;
        },
        renderStart: function () {
            spinner.text = 'generating bundle';
            spinner.render();
        },
        writeBundle: function () {
            spinner.stop();
            if (process.stdout.isTTY) {
                process.stdout.cursorTo(0);
            }
        }
    };
}
exports["default"] = loading;
