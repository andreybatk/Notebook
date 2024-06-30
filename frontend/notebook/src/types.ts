export interface INoteFilter{
    search?: string;
    sortItem?: string;
    sortOrder?: string
}
export interface INote{
    id?: string
    title?: string
    description?: string
    createdAt?: Date
}
export interface ICreateNote{
    title?: string
    description?: string
}