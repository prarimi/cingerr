export type Activity = {
  id: string
  name: string
  icon: string
  durationSeconds: number
  enabled: boolean
  flexible: boolean
}

export type Routine = {
  name: string
  wakeUpTime: string
  leaveTime: string
  activities: Activity[]
  soundEnabled: boolean
  reducedMotion: boolean
}

export type SessionStatus = 'idle' | 'running' | 'paused' | 'complete'

export type MorningSession = {
  date: string
  startedAt: number | null
  pausedAt: number | null
  pausedDurationSeconds: number
  extraTimeSeconds: number
  completedIds: string[]
  status: SessionStatus
}

export type MorningResult = {
  date: string
  completed: boolean
  minutesEarlyOrLate: number
  stars: number
  completedCount: number
}

export const STORAGE_KEY = 'morning-adventure-state'

export const defaultActivities: Activity[] = [
  { id: 'wake', name: 'Wake up', icon: '🌞', durationSeconds: 5 * 60, enabled: true, flexible: false },
  { id: 'toilet', name: 'Bathroom break', icon: '🚽', durationSeconds: 5 * 60, enabled: true, flexible: false },
  { id: 'teeth', name: 'Brush teeth', icon: '🪥', durationSeconds: 5 * 60, enabled: true, flexible: false },
  { id: 'dress', name: 'Get dressed', icon: '👕', durationSeconds: 10 * 60, enabled: true, flexible: true },
  { id: 'breakfast', name: 'Eat breakfast', icon: '🥣', durationSeconds: 15 * 60, enabled: true, flexible: true },
  { id: 'bag', name: 'Pack school bag', icon: '🎒', durationSeconds: 10 * 60, enabled: true, flexible: true },
  { id: 'shoes', name: 'Shoes & jacket', icon: '👟', durationSeconds: 5 * 60, enabled: true, flexible: false },
  { id: 'leave', name: 'Leave home', icon: '🚪', durationSeconds: 5 * 60, enabled: true, flexible: false },
]

export const defaultRoutine: Routine = {
  name: 'School day adventure',
  wakeUpTime: '07:00',
  leaveTime: '08:00',
  activities: defaultActivities,
  soundEnabled: true,
  reducedMotion: false,
}

export type StoredState = {
  routine: Routine
  session: MorningSession
  history: MorningResult[]
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

export function newSession(): MorningSession {
  return {
    date: todayKey(),
    startedAt: null,
    pausedAt: null,
    pausedDurationSeconds: 0,
    extraTimeSeconds: 0,
    completedIds: [],
    status: 'idle',
  }
}

export function getEnabledActivities(routine: Routine): Activity[] {
  return routine.activities.filter((activity) => activity.enabled)
}

export function scheduleSeconds(routine: Routine): number {
  return getEnabledActivities(routine).reduce((total, activity) => total + activity.durationSeconds, 0)
}

export function availableSeconds(routine: Routine): number {
  const [wakeHours, wakeMinutes] = routine.wakeUpTime.split(':').map(Number)
  const [leaveHours, leaveMinutes] = routine.leaveTime.split(':').map(Number)
  return Math.max(0, (leaveHours * 60 + leaveMinutes - wakeHours * 60 - wakeMinutes) * 60)
}

export function formatDuration(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds))
  const minutes = Math.floor(safeSeconds / 60)
  const remainder = safeSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`
}

export function sessionElapsedSeconds(session: MorningSession, now: number): number {
  if (!session.startedAt) return 0
  const end = session.pausedAt ?? now
  return Math.max(0, (end - session.startedAt) / 1000 - session.pausedDurationSeconds)
}

export function currentActivityIndex(routine: Routine, session: MorningSession, now: number): number {
  const activities = getEnabledActivities(routine)
  const elapsed = sessionElapsedSeconds(session, now)
  let consumed = 0
  for (let index = 0; index < activities.length; index += 1) {
    consumed += activities[index].durationSeconds
    if (elapsed < consumed) return index
  }
  return Math.max(0, activities.length - 1)
}

export function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { routine: defaultRoutine, session: newSession(), history: [] }
    const parsed = JSON.parse(raw) as Partial<StoredState>
    if (!parsed.routine || !parsed.session) return { routine: defaultRoutine, session: newSession(), history: [] }
    if (parsed.session.date !== todayKey()) return { routine: parsed.routine, session: newSession(), history: parsed.history ?? [] }
    return { routine: parsed.routine, session: parsed.session, history: parsed.history ?? [] }
  } catch {
    return { routine: defaultRoutine, session: newSession(), history: [] }
  }
}

export function saveState(state: StoredState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
