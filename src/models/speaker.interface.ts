export interface Speaker{
    key: string;
    about: string;
    email: string;
    id: string;
    location: string;
    name: string;
    phone: string;
    profilePic: string;
    twitter: string;
}

export interface SpeakerModel{
    key: string;
    speaker: Speaker;
}

export class SpeakerModel implements SpeakerModel{
    
}

export class Speaker implements Speaker{
    
}