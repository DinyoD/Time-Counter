export interface Item {
    id?: string;
    creationDate: Date;
    creationDateDisplay: string;
    ticket?: string;
    startTime: number;
    startTimeDisplay: string;
    endTime?: number;
    endTimeDisplay?: string;
    durationTime?: number;
    stoped: boolean;
}
