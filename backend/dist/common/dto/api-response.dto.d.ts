export declare class ApiResponseDto<T = unknown> {
    data: T | undefined;
    message: string | undefined;
    code: number | undefined;
    statusHttpCode: number | undefined;
}
