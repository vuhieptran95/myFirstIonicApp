export interface Session{
    id: string;
    name: string;
    description: string;
    location: string;
    speakers: any[];
    timeStart: string;
    timeEnd: string;
}

export interface SessionModel{
    key: string;
    session: any;
}