import { CreateKudoDto } from './dtos/create-kudo.dto';
import { ListKudosQuery } from './dtos/list-kudos.query';
import { KudosService } from './kudos.service';
export declare class KudosPeerRecognitionController {
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
    listSent(req: {
        user: {
            sub: string;
        };
    }, query: ListKudosQuery): Promise<{
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
    listReceived(req: {
        user: {
            sub: string;
        };
    }, query: ListKudosQuery): Promise<{
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
}
