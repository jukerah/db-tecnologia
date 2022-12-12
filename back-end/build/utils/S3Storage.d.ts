declare class S3Storage {
    private client;
    constructor();
    saveFile(filename: string): Promise<void>;
    deleteFile(filename: string): Promise<void>;
}
export default S3Storage;
