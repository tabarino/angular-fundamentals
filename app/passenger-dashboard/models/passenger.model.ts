import { Child } from "./child.model";

export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number;
    children: Child[] | null;
}
