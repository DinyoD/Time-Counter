export interface Item {
    id?: string;
    creationDate: Date;
    ticket?: string;
    startTime: Date;
    endTime?: Date;
    durationTime?: Date;
    paused: boolean;
}
