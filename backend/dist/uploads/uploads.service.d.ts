export declare class UploadsService {
    constructor();
    uploadFile(file: Express.Multer.File): Promise<{
        url: string;
        publicId: string;
        resourceType: string;
        originalName: string;
        mimeType: string;
        size: number;
    }>;
}
