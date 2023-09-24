import { ApiDTO } from 'funixproductions-apis-core';

export class PacifistaNewsDTO extends ApiDTO {
    originalWriter!: string;
    updateWriter!: string;
    name!: string;
    title!: string;
    subtitle!: string;
    articleImageUrl!: string;
    body!: string;
    likesAmount!: number;
    commentsAmount!: number;
}