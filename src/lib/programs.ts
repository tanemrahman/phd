import {
  Landmark,
  Rocket,
  Wrench,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';

export type ProgramKey =
  | 'grant'
  | 'implementation'
  | 'technical'
  | 'capacity'
  | 'academic'
  | 'humanitarian';

export const PROGRAMS: {key: ProgramKey; Icon: LucideIcon}[] = [
  {key: 'grant', Icon: Landmark},
  {key: 'implementation', Icon: Rocket},
  {key: 'technical', Icon: Wrench},
  {key: 'capacity', Icon: GraduationCap},
  {key: 'academic', Icon: BookOpen},
  {key: 'humanitarian', Icon: HeartHandshake},
];
