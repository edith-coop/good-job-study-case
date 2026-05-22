import { KudoType, Visibility } from '../generated/prisma/client';
import { NotificationsService } from '../notifications/notifications.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { CreateFeedPostDto } from './dtos/create-feed-post.dto';
import { CreateKudoDto } from './dtos/create-kudo.dto';
import { CreateReactionDto } from './dtos/create-reaction.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
export declare class KudosService {
    private readonly prisma;
    private readonly notificationsService;
    constructor(prisma: PrismaService, notificationsService: NotificationsService);
    private readonly includeKudo;
    private getCurrentMonth;
    private loadSenderAndReceiver;
    private validateTaggedUserIds;
    private ensureMonthlyBudget;
    private updateMonthlyBudget;
    private createKudoRecord;
    private createPointLedgers;
    private notifyKudoReceiver;
    private notifyTaggedUsers;
    create(senderId: string, dto: CreateKudoDto): Promise<{
        kudo: any;
        budget: any;
    }>;
    createFeed(senderId: string, dto: CreateFeedPostDto): Promise<{
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
            type: KudoType;
            points: number;
            visibility: Visibility;
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
            type: KudoType;
            points: number;
            visibility: Visibility;
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
    listSent(senderId: string, query: ListKudosQuery): Promise<{
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
            type: KudoType;
            points: number;
            visibility: Visibility;
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
    listReceived(receiverId: string, query: ListKudosQuery): Promise<{
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
            type: KudoType;
            points: number;
            visibility: Visibility;
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
        type: KudoType;
        points: number;
        visibility: Visibility;
        createdAt: Date;
        updatedAt: Date;
        senderId: string;
        receiverId: string;
    }>;
    addComment(userId: string, kudoId: string, dto: CreateCommentDto): Promise<{
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
    addReaction(userId: string, kudoId: string, dto: CreateReactionDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        kudoId: string;
        emoji: import("../generated/prisma/enums").ReactionEmoji;
    }>;
}
