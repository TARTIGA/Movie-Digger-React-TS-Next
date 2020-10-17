export type TVideoItem = {
    id: number;
    source: string;
    description: string;
    added: string;
    duration: string;
    picture: {
        id: number;
        path: string;
    }[];
    tag: string[];
    pornstar: string[];
    webcam: string[];
}