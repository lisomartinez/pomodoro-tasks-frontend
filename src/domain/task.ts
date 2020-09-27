import { Interval } from "./interval";

export interface Task {
  id: string;
  title: string;
  intervals: Interval[];
}
