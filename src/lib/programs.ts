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

export const PROGRAMS: {key: ProgramKey; slug: string; Icon: LucideIcon}[] = [
  {key: 'grant', slug: 'grant-management', Icon: Landmark},
  {key: 'implementation', slug: 'program-implementation', Icon: Rocket},
  {key: 'technical', slug: 'technical-assistance', Icon: Wrench},
  {key: 'capacity', slug: 'capacity-development', Icon: GraduationCap},
  {key: 'academic', slug: 'academic', Icon: BookOpen},
  {key: 'humanitarian', slug: 'humanitarian-response', Icon: HeartHandshake},
];

export const programBySlug = (slug: string) => PROGRAMS.find((p) => p.slug === slug);
