import { MediaType, Visibility } from '../../generated/prisma/enums';
declare class KudoMediaDto {
    mediaType: MediaType;
    mediaUrl: string;
    durationSeconds?: number;
}
export declare class CreateKudoDto {
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: Visibility;
    media?: KudoMediaDto[];
    taggedUserIds?: string[];
}
export {};
