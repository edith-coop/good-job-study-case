import { MediaType } from "../../generated/prisma/enums";
declare class CommentMediaDto {
    mediaType: MediaType;
    mediaUrl: string;
}
export declare class CreateCommentDto {
    content: string;
    media?: CommentMediaDto[];
}
export {};
