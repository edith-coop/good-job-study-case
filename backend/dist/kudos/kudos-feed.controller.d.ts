import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateFeedPostDto } from './dtos/create-feed-post.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';
export declare class KudosFeedController {
    private readonly kudosService;
    constructor(kudosService: KudosService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateFeedPostDto): Promise<{
        kudo: {
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
                    mediaType: import("../generated/prisma/enums").MediaType;
                    mediaUrl: string;
                    commentId: string;
                }[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                kudoId: string;
                content: string;
            })[];
            media: {
                id: string;
                createdAt: Date;
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
                durationSeconds: number | null;
                kudoId: string;
            }[];
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
            reactions: {
                id: string;
                createdAt: Date;
                userId: string;
                kudoId: string;
                emoji: import("../generated/prisma/enums").ReactionEmoji;
            }[];
            tags: ({
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
                userId: string;
                kudoId: string;
            })[];
        } & {
            message: string;
            coreValue: string;
            id: string;
            type: import("../generated/prisma/enums").KudoType;
            points: number;
            visibility: import("../generated/prisma/enums").Visibility;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
        };
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
                    mediaType: import("../generated/prisma/enums").MediaType;
                    mediaUrl: string;
                    commentId: string;
                }[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                kudoId: string;
                content: string;
            })[];
            media: {
                id: string;
                createdAt: Date;
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
                durationSeconds: number | null;
                kudoId: string;
            }[];
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
            reactions: {
                id: string;
                createdAt: Date;
                userId: string;
                kudoId: string;
                emoji: import("../generated/prisma/enums").ReactionEmoji;
            }[];
            tags: ({
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
                userId: string;
                kudoId: string;
            })[];
        } & {
            message: string;
            coreValue: string;
            id: string;
            type: import("../generated/prisma/enums").KudoType;
            points: number;
            visibility: import("../generated/prisma/enums").Visibility;
            createdAt: Date;
            updatedAt: Date;
            senderId: string;
            receiverId: string;
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
                mediaType: import("../generated/prisma/enums").MediaType;
                mediaUrl: string;
                commentId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            kudoId: string;
            content: string;
        })[];
        media: {
            id: string;
            createdAt: Date;
            mediaType: import("../generated/prisma/enums").MediaType;
            mediaUrl: string;
            durationSeconds: number | null;
            kudoId: string;
        }[];
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
        reactions: {
            id: string;
            createdAt: Date;
            userId: string;
            kudoId: string;
            emoji: import("../generated/prisma/enums").ReactionEmoji;
        }[];
        tags: ({
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
            userId: string;
            kudoId: string;
        })[];
    } & {
        message: string;
        coreValue: string;
        id: string;
        type: import("../generated/prisma/enums").KudoType;
        points: number;
        visibility: import("../generated/prisma/enums").Visibility;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
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
            mediaType: import("../generated/prisma/enums").MediaType;
            mediaUrl: string;
            commentId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        kudoId: string;
        content: string;
    }>;
    addReaction(req: {
        user: {
            sub: string;
        };
    }, id: string, dto: CreateReactionDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        kudoId: string;
        emoji: import("../generated/prisma/enums").ReactionEmoji;
    }>;
}
