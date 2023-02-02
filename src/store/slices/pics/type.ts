export interface IPic {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface IPicsState {
    pics: IPic[];
    startPage: number;
}