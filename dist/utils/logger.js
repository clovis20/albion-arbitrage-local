"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.logger = {
    info: (message) => {
        console.log(`[${new Date().toISOString()}] INFO: ${message}`);
    },
    error: (message) => {
        console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
    },
    warn: (message) => {
        console.warn(`[${new Date().toISOString()}] WARN: ${message}`);
    },
    debug: (message) => {
        console.log(`[${new Date().toISOString()}] DEBUG: ${message}`);
    },
};
//# sourceMappingURL=logger.js.map