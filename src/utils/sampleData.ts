import type { Day, PostProductionItem } from '../types'

let idCounter = 0
const genId = () => `samp_${++idCounter}_${Math.random().toString(36).slice(2, 6)}`

export const sampleDays: Day[] = [
  {
    id: genId(),
    label: 'DAY 1',
    services: [
      { name: 'Cinematographer', quantity: 1 },
      { name: 'Candid Photographer', quantity: 1 },
      { name: 'Family Photographer', quantity: 1 },
      { name: 'Ritual Photographer', quantity: 1 },
      { name: 'Ritual Videographer', quantity: 1 },
      { name: 'Drone', quantity: 1 },
    ],
  },
  {
    id: genId(),
    label: 'DAY 2',
    services: [
      { name: 'Cinematographer', quantity: 1 },
      { name: 'Candid Photographer', quantity: 1 },
      { name: 'Ritual Photographer', quantity: 1 },
      { name: 'Ritual Videographer', quantity: 1 },
      { name: 'Drone', quantity: 1 },
    ],
  },
  {
    id: genId(),
    label: 'DAY 3',
    services: [
      { name: 'Cinematographer', quantity: 1 },
      { name: 'Candid Photographer', quantity: 1 },
      { name: 'Ritual Photographer', quantity: 1 },
      { name: 'Ritual Videographer', quantity: 1 },
    ],
  },
]

export const samplePostProduction: PostProductionItem[] = [
  { name: 'Cinematic Highlight', quantity: 1 },
  { name: 'Cinematic Teaser', quantity: 1 },
  { name: 'Short Film', quantity: 1 },
  { name: 'Ritual Video', quantity: 1 },
  { name: 'Edited Photos', quantity: 1 },
  { name: 'Wedding Magazine', quantity: 1 },
  { name: 'Instagram Reels', quantity: 2 },
  { name: 'Wedding Album', quantity: 2 },
]
