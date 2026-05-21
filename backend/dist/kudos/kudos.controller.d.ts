import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateKudoDto } from './dtos/create-kudo.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';
export declare class KudosController {
    private readonly kudosService;
    constructor(kudosService: KudosService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateKudoDto): Promise<{
        kudo: any;
        budget: any;
    }>;
    list(query: ListKudosQuery): Promise<{
        items: ({
            comments: ({
                user: {
                    id: string;
                    email: string;
                    fullName: string;
                    avatarUrl: string | null;
                    department: string | null;
                };
                media: {
                    id: string;
                    createdAt: Date;
                    commentId: string;
                    mediaType: import("../generated/prisma/enums").MediaType;
                    mediaUrl: string;
                }[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                kudoId: string;
                userId: string;
                content: string;
            })[];
            receiver: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            };
            reactions: {
                id: string;
                createdAt: Date;
                kudoId: string;
                userId: string;
                emoji: import("../generated/prisma/enums").ReactionEmoji;
            }[];
            sender: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            };
            media: {
                id: string;
                createdAt: Date;
                kudoId: string;
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
                durationSeconds: number | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            receiverId: string;
            updatedAt: Date;
            senderId: string;
            points: number;
            coreValue: string;
            message: string;
            visibility: import("../generated/prisma/enums").Visibility;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getById(id: string): Promise<{
        comments: ({
            user: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            };
            media: {
                id: string;
                createdAt: Date;
                commentId: string;
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            kudoId: string;
            userId: string;
            content: string;
        })[];
        receiver: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        reactions: {
            id: string;
            createdAt: Date;
            kudoId: string;
            userId: string;
            emoji: import("../generated/prisma/enums").ReactionEmoji;
        }[];
        sender: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        media: {
            id: string;
            createdAt: Date;
            kudoId: string;
            mediaType: import("../generated/prisma/enums").MediaType;
            mediaUrl: string;
            durationSeconds: number | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        receiverId: string;
        updatedAt: Date;
        senderId: string;
        points: number;
        coreValue: string;
        message: string;
        visibility: import("../generated/prisma/enums").Visibility;
    }>;
    addComment(req: {
        user: {
            sub: string;
        };
    }, id: string, dto: CreateCommentDto): Promise<{
        user: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        media: {
            id: string;
            createdAt: Date;
            commentId: string;
            mediaType: import("../generated/prisma/enums").MediaType;
            mediaUrl: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kudoId: string;
        userId: string;
        content: string;
    }>;
    addReaction(req: {
        user: {
            sub: string;
        };
    }, id: string, dto: CreateReactionDto): Promise<{
        id: string;
        createdAt: Date;
        kudoId: string;
        userId: string;
        emoji: import("../generated/prisma/enums").ReactionEmoji;
    }>;
}
