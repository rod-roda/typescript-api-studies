// Query parameters vindos da URL
export interface BookQueryParams {
    publisher?: string;
    title?: string;
    minPages?: string;
    maxPages?: string;
}

// Query formatada para MongoDB
export interface MongoBookQuery {
    publisher?: string;
    title?: {
        $regex: string;
        $options: string;
    };
    pages?: {
        $gte?: number;
        $lte?: number;
    };
}