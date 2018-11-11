import { Starship } from "./starship.interface";

export interface SWAPIStarship {
    count: number;
    next?: any;
    previous: string;
    results: Starship[];
}
