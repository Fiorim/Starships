import { Starship } from "./starship.interface";

export interface SWAPIStarship {
    next: string;
    previous: string;
    results: Starship[];
}
