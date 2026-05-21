import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadsService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFile(file: Express.Multer.File) {
    return new Promise<{
      url: string;
      publicId: string;
      resourceType: string;
      originalName: string;
      mimeType: string;
      size: number;
    }>((resolve, reject) => {
      const resourceType = file.mimetype.startsWith('video/') ? 'video' : 'image';
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'amanotes/uploads',
          resource_type: resourceType,
        },
        (error, result) => {
          if (error || !result) {
            reject(error ?? new Error('Upload failed'));
            return;
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            resourceType: result.resource_type ?? resourceType,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
          });
        },
      );

      stream.end(file.buffer);
    });
  }
}
