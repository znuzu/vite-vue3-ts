export interface Pageable {
    content: TableData[],
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
}

export interface TableHeader {
    field: string,
    label: string,
    width?: number | string,
    align?: string,
}

export interface TableData {
    [key: string]: string | number,
}

export interface SelectBox {
    label: string,
    value: string | number,
}