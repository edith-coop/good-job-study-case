import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    upload(file: Express.Multer.File): Promise<{
        url: string;
        publicId: string;
        resourceType: string;
        originalName: string;
        mimeType: string;
        size: number;
    }>;
}
