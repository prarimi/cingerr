# Build a Gamified Kids Morning Routine Alarm Clock

## 1. Product Vision

Build a **mobile- and tablet-friendly morning routine alarm clock application for young children**.

The purpose of the application is to help a child complete their morning school preparations independently and **leave home on time**, without the parent having to constantly remind them what to do.

The application should transform the morning routine into a **fun timed challenge/game**.

Instead of showing a traditional alarm clock, the application should divide the available morning time into a sequence of activities.

For example:

- Wake up
- Use the toilet
- Brush teeth
- Get dressed
- Eat breakfast
- Prepare school bag
- Put on shoes and jacket
- Leave for school

Each activity has a specific amount of time.

The child sees:

1. What they should be doing NOW
2. A large visual representation of the activity
3. How much time remains for the activity
4. What activity comes next
5. Their overall progress toward leaving on time
6. Encouraging animations, sounds and rewards

The application should feel more like a **friendly children's game** than a productivity application.

---

# 2. Target User

Primary user:

A child approximately 5–8 years old who needs help following a morning routine.

Secondary user:

The parent, who configures the routine and monitors/improves it over time.

The child should be able to use the main morning screen with **minimal or no reading**.

Use large icons, illustrations, animations, colors, sounds and simple language.

The interface should be usable by a child who may only have basic reading skills.

---

# 3. Main Concept

The parent defines:

- Wake-up time
- School/leave time
- Morning activities
- Duration of each activity
- Order of activities
- Optional sound effects
- Optional rewards

Example:

Wake up: 07:00

| Time | Activity | Duration |
|---|---|---:|
| 07:00–07:05 | Wake up | 5 min |
| 07:05–07:10 | Toilet | 5 min |
| 07:10–07:15 | Brush teeth | 5 min |
| 07:15–07:25 | Get dressed | 10 min |
| 07:25–07:40 | Breakfast | 15 min |
| 07:40–07:50 | Prepare school bag | 10 min |
| 07:50–07:55 | Shoes & jacket | 5 min |
| 07:55–08:00 | Leave! | 5 min |

The exact activities and durations must be configurable.

---

# 4. Core Morning Experience

When the morning starts, show a full-screen **Morning Adventure** screen.

Example:

> 🌞 GOOD MORNING!
>
> It's time to get ready for school!
>
> [large animated character]

Then start the first activity.

For example:

> 🪥 BRUSH YOUR TEETH
>
> [large animated toothbrush / child brushing teeth]
>
> 03:42
>
> ███████████░░░░
>
> Next:
> 👕 GET DRESSED

The countdown should be extremely prominent.

The child should immediately understand:

**"This is what I need to do right now."**

---

# 5. Activity Timer

Every activity has:

- Name
- Icon/illustration
- Optional animation
- Duration
- Start sound
- Countdown timer
- Progress indicator
- Completion sound
- Encouragement message

The timer should count down continuously.

Use a visually engaging progress mechanism rather than simply displaying numbers.

Possible implementations:

- Circular countdown
- Animated progress bar
- Character moving toward a destination
- Sun moving across the sky
- Rocket filling with fuel
- Animal running toward a finish line

Choose a consistent visual metaphor and use it throughout the application.

---

# 6. Gamification

The application should encourage the child without making them feel punished.

Introduce a simple reward system.

For example:

### Stars

The child can earn:

⭐ Completed activity on time  
⭐⭐ Completed activity early  
⭐⭐⭐ Completed the entire morning routine on time

Maintain a daily score.

Example:

> 🌟 MORNING SCORE
>
> ⭐ ⭐ ⭐ ⭐ ☆
>
> Amazing job!

The application could also maintain a streak:

> 🔥 4 DAYS IN A ROW!

However, avoid excessive gamification or anything that could make the child anxious.

The overall feeling should be:

**"Let's beat the clock!"**

rather than:

**"You're late and you're failing."**

---

# 7. Positive Competition

Create a friendly "challenge against the clock."

For example:

> 🏃 Can you finish before the alarm?
>
> GO GO GO!

If the child finishes early:

> 🎉 WOW!
>
> You finished 2 minutes early!
>
> ⭐ BONUS STAR!

If the child is running late:

> ⏰ Hurry up!
>
> You've got this!

Avoid negative messages such as:

- "You failed."
- "You're late!"
- "You're too slow."
- "Bad job."

Instead use encouraging messages:

- "Let's catch up!"
- "You can do it!"
- "Almost there!"
- "Quick feet!"
- "Let's beat the clock!"

---

# 8. Activity Transitions

When an activity finishes, play a short positive sound and animate the transition.

Example:

Toilet → Brush teeth:

[celebration animation]

> ✅ GREAT JOB!
>
> Next mission:
>
> 🪥 BRUSH YOUR TEETH

Then automatically start the next activity after a short transition.

The child should not have to manually operate the application between activities.

---

# 9. Parent Controls

Create a separate **Parent Mode**.

Parent Mode should be protected from accidental child interaction.

Use a simple mechanism such as:

- Long press
- Parent button hidden behind a gesture
- Simple parent PIN

Do NOT require complex authentication.

Parent Mode should allow configuration of:

### Morning schedule

- Wake-up time
- School/leave time

### Activities

Allow the parent to:

- Add activity
- Remove activity
- Reorder activities
- Change duration
- Change activity name
- Select an icon/illustration
- Enable/disable activity
- Configure sounds

Example predefined activities:

- 🌞 Wake up
- 🚽 Toilet
- 🪥 Brush teeth
- 👕 Get dressed
- 🥣 Breakfast
- 🎒 Prepare school bag
- 👟 Put on shoes
- 🧥 Put on jacket
- 🚪 Leave home

Allow custom activities as well.

---

# 10. Smart Time Allocation

The application should calculate the total duration of all activities.

Example:

Wake up = 5 min
Toilet = 5 min
Brush teeth = 5 min
Dress = 10 min
Breakfast = 15 min
Bag = 10 min
Shoes = 5 min
Leave = 5 min

Total = 60 minutes.

If wake-up is 07:00 and leave time is 08:00, everything fits perfectly.

If the parent changes one activity from 10 minutes to 15 minutes, the application should immediately show that the routine no longer fits.

Display:

> ⚠️ Your routine takes 65 minutes.
>
> You only have 60 minutes.
>
> You need 5 more minutes.

Provide a helpful visual timeline.

---

# 11. Dynamic Schedule

Support two scheduling modes.

### Fixed durations

Each activity has a fixed duration.

Example:

Brush teeth = 5 minutes.

### Flexible time

Allow an activity to be marked as flexible.

If the routine is running late, the application may adjust flexible activities.

For example:

Breakfast = flexible

The system could visually indicate:

> ⚡ We're running 3 minutes behind.
>
> Let's speed up!

Do not automatically shorten important activities such as brushing teeth unless explicitly configured by the parent.

---

# 12. Morning Dashboard

Create a timeline/progress view.

Example:

07:00 🌞 Wake up        ✅
07:05 🚽 Toilet         ✅
07:10 🪥 Brush teeth    ▶ NOW
07:15 👕 Get dressed
07:25 🥣 Breakfast
07:40 🎒 School bag
07:50 👟 Shoes
07:55 🚪 Leave

The current activity should be visually emphasized.

Completed activities should become visually "checked off."

Upcoming activities should remain muted but visible.

---

# 13. Final Countdown

The last activity should be a special "Leaving" phase.

For example:

> 🚪 TIME TO GO!
>
> 02:35
>
> 🏃🏃🏃
>
> Get your shoes and jacket!
>
> Let's get to school on time!

When the child completes the final activity:

> 🎉 YOU DID IT!
>
> 🌟 MORNING MISSION COMPLETE!
>
> You are ready for school!
>
> ⭐⭐⭐⭐⭐

Play a satisfying completion sound and animation.

---

# 14. Daily Results

After the morning routine, show a very short results screen.

Example:

> 🌟 TODAY'S MORNING
>
> You completed:
>
> ⭐ 7 activities
>
> 🏆 Finished 2 minutes early!
>
> 🔥 4-day streak!
>
> GREAT JOB!

Keep this screen simple and fun.

---

# 15. History

Parent Mode should include a simple history view.

Show:

- Date
- Completed/not completed
- Finished on time
- Minutes early/late
- Stars earned

Example:

| Date | Result | Time |
|---|---|---:|
| Monday | ⭐⭐⭐⭐⭐ | 2 min early |
| Tuesday | ⭐⭐⭐⭐ | 1 min late |
| Wednesday | ⭐⭐⭐⭐⭐ | 4 min early |

Provide a simple weekly visualization.

The purpose is NOT to judge the child.

It is to help the parent identify patterns such as:

- Breakfast consistently takes too long
- Dressing needs more time
- The routine is too ambitious
- Certain activities are frequently skipped

---

# 16. Sounds

Sound is an important part of the experience.

Support:

- Morning wake-up sound
- Activity start sound
- 1-minute warning
- 30-second warning
- Activity completion sound
- Final countdown
- Success sound
- Encouragement sounds

Provide a global sound toggle.

Allow the parent to choose between several sound themes.

Possible themes:

- Space 🚀
- Animals 🦁
- Superhero 🦸
- Adventure 🏴‍☠️
- Fun/Cartoon 🎵

Keep sounds short and pleasant.

Do not constantly play distracting music.

---

# 17. Visual Design

The application should look polished and modern.

Design principles:

- Large buttons
- Large typography
- High contrast
- Rounded corners
- Friendly illustrations
- Smooth animations
- Minimal text
- Child-friendly colors
- Lots of whitespace
- No complicated menus

The morning screen should be usable from a distance.

For example, if an iPad is sitting on the kitchen counter, the child should immediately see:

**WHAT DO I NEED TO DO?**

and

**HOW MUCH TIME DO I HAVE?**

---

# 18. Responsive Design

The application must work well on:

- Mobile phones
- iPads
- Android tablets
- Desktop browsers if practical

Design mobile-first.

Support both portrait and landscape layouts.

On tablets, take advantage of the larger screen by displaying:

LEFT:
Current activity

CENTER:
Large countdown/animation

RIGHT:
Morning timeline

On phones, stack these vertically.

---

# 19. PWA / Installation

Prefer implementing the application as a **Progressive Web App (PWA)** so that it can be installed on:

- iPhone
- iPad
- Android
- Desktop

The application should support:

- Standalone installation
- Offline operation
- Local storage
- Persistent settings

The application should continue functioning even without an internet connection.

Do not introduce a backend unless it becomes necessary.

---

# 20. Persistence

Initially use local storage or IndexedDB.

Persist:

- Parent settings
- Morning schedule
- Activity definitions
- Child progress
- Daily results
- Stars
- Streak
- Sound settings
- Theme

The application should work completely offline.

---

# 21. Architecture

Use a clean, maintainable architecture.

Prefer:

Frontend:
- React
- TypeScript
- Vite

State management:
- Redux Toolkit where application-wide state is needed

Styling:
- Bootstrap or another lightweight responsive CSS solution

PWA:
- Use an appropriate Vite PWA solution

Use strongly typed TypeScript models.

Separate:

- UI components
- Domain models
- State management
- Persistence
- Timer logic
- Audio
- Animation
- Parent configuration

Avoid putting business logic directly inside React components.

---

# 22. Timer Architecture

Pay particular attention to timer accuracy.

Do NOT rely on:

setInterval(() => countdown--, 1000)

as the source of truth.

Instead calculate remaining time from timestamps.

For example:

remaining = endTime - currentTime

This prevents timer drift when the browser/device throttles JavaScript execution.

The timer must also recover correctly if:

- The application goes into the background
- The screen locks
- The browser is temporarily suspended
- The device wakes up again

Where browser/mobile OS limitations prevent reliable background execution, clearly isolate that limitation and design around it.

---

# 23. State Model

Create a clear state model similar to:

MorningRoutine
- id
- name
- wakeUpTime
- leaveTime
- activities[]

Activity
- id
- name
- icon
- durationSeconds
- order
- enabled
- flexible
- soundTheme

MorningSession
- date
- startedAt
- currentActivityId
- activitiesCompleted
- completedAt
- result
- stars
- minutesEarlyOrLate

The design should make it easy to add features later.

---

# 24. Screens

Implement at least the following screens:

### 1. Welcome / Setup

First launch.

Introduce the concept:

> "Let's build your morning adventure!"

Allow parent to configure the routine.

### 2. Child Morning Screen

The main application.

Large timer, activity illustration, progress and encouragement.

### 3. Parent Mode

Configuration dashboard.

### 4. Activity Editor

Create/edit/reorder activities.

### 5. History / Progress

View previous mornings.

### 6. Settings

Sound, theme, routine and application settings.

---

# 25. First-Launch Default Routine

Provide a default routine so the application is immediately usable.

Default:

07:00 — Wake up — 5 min
07:05 — Toilet — 5 min
07:10 — Brush teeth — 5 min
07:15 — Get dressed — 10 min
07:25 — Breakfast — 15 min
07:40 — Prepare school bag — 10 min
07:50 — Shoes & jacket — 5 min
07:55 — Leave home — 5 min

School/leave time:

08:00

Allow the parent to modify everything.

---

# 26. Animation Requirements

Animations should be subtle but fun.

Examples:

- Character walks/runs as time progresses
- Progress bar animates
- Stars appear when an activity is completed
- Confetti for successful completion
- Character celebrates when the routine is completed
- Countdown pulses during the final 30 seconds
- Gentle warning animation during the final minute

Respect `prefers-reduced-motion`.

Provide a setting to disable animations.

---

# 27. Important UX Principle

The child should NEVER need to understand complicated application controls.

During the morning:

**Do not show settings.**

**Do not show menus.**

**Do not require the child to navigate between screens.**

The application should behave almost like a television program:

1. Wake up
2. Show activity
3. Countdown
4. Encourage
5. Finish
6. Automatically move to next activity
7. Repeat
8. Celebrate success

The parent configures everything beforehand.

---

# 28. Parent-Friendly Features

Add the following where practical:

### "Preview Morning"

Allow the parent to run through the entire routine quickly without waiting.

For example:

1 minute of real time = 10 seconds in preview mode.

### "Skip Activity"

Parent can skip an activity.

### "Pause"

Parent can pause the routine.

### "Add Extra Time"

Parent can add 1, 2 or 5 minutes to the current activity.

### "Restart Morning"

Restart today's routine.

These controls should only be accessible in Parent Mode.

---

# 29. Accessibility

Consider:

- Large touch targets
- High contrast
- Screen reader labels
- Reduced motion
- No reliance on color alone
- Sound alternatives
- Clear visual indicators

The child should be able to understand the current state primarily through visuals.

---

# 30. Technical Quality

The generated application should:

- Use TypeScript strictly
- Avoid unnecessary dependencies
- Have reusable components
- Have clear domain models
- Avoid duplicated logic
- Handle timer edge cases
- Persist state reliably
- Work offline
- Be responsive
- Be installable as a PWA
- Have sensible error handling
- Have unit tests for timer and schedule calculations

Do not over-engineer the first version.

Prefer a small, clean architecture that can evolve.

---

# 31. Development Approach

Build the application incrementally.

### Phase 1 — MVP

Implement:

- Morning routine configuration
- Default routine
- Activity list
- Countdown timer
- Automatic activity transitions
- Progress indicator
- Child morning screen
- Local persistence
- Responsive mobile/tablet UI

### Phase 2 — Gamification

Add:

- Stars
- Streaks
- Encouragement messages
- Completion animations
- Confetti
- Sound effects

### Phase 3 — Parent Dashboard

Add:

- History
- Statistics
- Routine editor
- Activity customization
- Preview mode

### Phase 4 — Polish

Improve:

- Animations
- Sound themes
- Visual design
- Accessibility
- PWA installation
- Offline support
- Edge cases

---

# 32. Acceptance Criteria

The application is successful when:

1. A parent can configure a morning routine in less than 5 minutes.

2. The child can start the routine with one obvious action.

3. The child can immediately identify the current activity.

4. The remaining time is obvious from across the room.

5. The application automatically moves between activities.

6. The child receives positive feedback for completing activities.

7. The child can understand progress without reading lots of text.

8. The application works well on an iPad.

9. The application works offline.

10. Closing/reopening the application does not destroy the current morning session.

11. Timer calculations do not drift significantly.

12. The parent can see whether the planned routine is realistically achievable within the available time.

13. The application feels like a **fun morning challenge rather than a chore-management application**.

---

# 33. Important Product Philosophy

Do not make this application feel like a productivity tool designed for adults.

It should feel like:

**"A little adventure I play every morning."**

The child should gradually associate:

🌞 Morning → 🎮 Challenge → 🏆 Success → ⭐ Reward → 🏫 School

The ultimate goal is to help the child develop an independent morning routine so that, over time, the parent needs to give fewer verbal reminders.

---

# 34. Before Coding

Before implementing the application:

1. Analyze the requirements.
2. Propose the application architecture.
3. Propose the folder structure.
4. Define the core TypeScript interfaces/models.
5. Define the state management approach.
6. Define the timer/session architecture.
7. Define the major UI components.
8. Explain any important technical limitations, especially regarding alarms, background execution and iOS/PWA behavior.
9. Identify any ambiguities or assumptions.
10. Then begin implementation.

Do not stop after generating the architecture. Proceed to implement the application.

After each major implementation phase, run the available tests/build/lint checks and fix errors before continuing.

At the end, provide:

- How to run the application
- How to build it
- How to install it as a PWA
- Project structure overview
- Implemented features
- Known limitations
- Suggested future improvements