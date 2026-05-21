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
                media: {
                    id: string;
                    createdAt: Date;
                    commentId: string;
                    mediaType: import("../generated/prisma/enums").MediaType;
                    mediaUrl: string;
                }[];
                user: {
                    id: string;
                    email: string;
                    fullName: string;
                    avatarUrl: string | null;
                    department: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                kudoId: string;
                userId: string;
                content: string;
            })[];
            sender: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            };
            receiver: {
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
            reactions: {
                id: string;
                createdAt: Date;
                kudoId: string;
                userId: string;
                emoji: import("../generated/prisma/enums").ReactionEmoji;
            }[];
        } & {
            id: string;
            senderId: string;
            receiverId: string;
            points: number;
            coreValue: string;
            message: string;
            visibility: import("../generated/prisma/enums").Visibility;
            createdAt: Date;
            updatedAt: Date;
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
            media: {
                id: string;
                createdAt: Date;
                commentId: string;
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
            }[];
            user: {
                id: string;
                email: string;
                fullName: string;
                avatarUrl: string | null;
                department: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            kudoId: string;
            userId: string;
            content: string;
        })[];
        sender: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
        receiver: {
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
        reactions: {
            id: string;
            createdAt: Date;
            kudoId: string;
            userId: string;
            emoji: import("../generated/prisma/enums").ReactionEmoji;
        }[];
    } & {
        id: string;
        senderId: string;
        receiverId: string;
        points: number;
        coreValue: string;
        message: string;
        visibility: import("../generated/prisma/enums").Visibility;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addComment(req: {
        user: {
            sub: string;
        };
    }, id: string, dto: CreateCommentDto): Promise<{
        media: {
            id: string;
            createdAt: Date;
            commentId: string;
            mediaType: import("../generated/prisma/enums").MediaType;
            mediaUrl: string;
        }[];
        user: {
            id: string;
            email: string;
            fullName: string;
            avatarUrl: string | null;
            department: string | null;
        };
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
