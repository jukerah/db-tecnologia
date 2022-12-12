"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mime_1 = __importDefault(require("mime"));
const multer_1 = __importDefault(require("../config/multer"));
class S3Storage {
    constructor() {
        this.client = new aws_sdk_1.default.S3({
            region: process.env.AWS_DEFAULT_REGION
        });
    }
    async saveFile(filename) {
        try {
            const originalPath = path_1.default.resolve(multer_1.default.directory, filename);
            const ContentType = mime_1.default.getType(originalPath);
            if (!ContentType) {
                throw new Error("File not found");
            }
            const fileContent = await fs_1.default.promises.readFile(originalPath);
            this.client
                .putObject({
                Bucket: process.env.BUCKET_NAME,
                Key: filename,
                ACL: "public-read",
                Body: fileContent,
                ContentType,
            })
                .promise();
            await fs_1.default.promises.unlink(originalPath);
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteFile(filename) {
        try {
            await this.client
                .deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: filename,
            })
                .promise();
        }
        catch (error) {
        }
    }
}
exports.default = S3Storage;
