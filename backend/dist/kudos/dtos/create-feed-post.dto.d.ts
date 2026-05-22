import { MediaType, Visibility } from '../../generated/prisma/enums';
declare class FeedMediaDto {
    mediaType: MediaType;
    mediaUrl: string;
    durationSeconds?: number;
}
export declare class CreateFeedPostDto {
    message: string;
    visibility?: Visibility;
    coreValue?: string;
    media?: FeedMediaDto[];
    taggedUserIds?: string[];
}
export {};
