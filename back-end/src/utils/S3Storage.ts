import aws, { S3 } from "aws-sdk";
import path from "path";
import fs from "fs";
import mime from "mime";

import multerConfig from "../config/multer";

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_DEFAULT_REGION
    });
  }

  async saveFile(filename: string) {
    try {
      const originalPath = path.resolve(multerConfig.directory, filename);
      
      const ContentType = mime.getType(originalPath);
  
      if (!ContentType) {
        throw new Error("File not found");
      }
  
      const fileContent = await fs.promises.readFile(originalPath);
      
      this.client
        .putObject({
          Bucket: process.env.BUCKET_NAME,
          Key: filename,
          ACL: "public-read",
          Body: fileContent,
          ContentType,
        })
        .promise();
  
      await fs.promises.unlink(originalPath);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteFile(filename: string) {
    try {
      await this.client
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: filename,
        })
        .promise();
    } catch (error) {
      
    }
  }
}

export default S3Storage;