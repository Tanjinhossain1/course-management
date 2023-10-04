export interface IMeta {
    limit: number;
    page: number;
    size: number;
}

export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
}

export type ResponseErrorType = {
    statusCode?: number;
    message?: string;
    errorMessages?: IGenericErrorMessages[]
};

export interface IGenericErrorMessages {
    path: string | number;
    message: string
}

export interface PaginatedTypes {
    total: number;
    page: number,
    limit: number
}