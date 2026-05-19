import type { AvailableService } from '../types'

export const AVAILABLE_SERVICES: AvailableService[] = [
  { name: 'Cinematographer', category: 'Video' },
  { name: 'Candid Photographer', category: 'Photo' },
  { name: 'Family Photographer', category: 'Photo' },
  { name: 'Ritual Photographer', category: 'Photo' },
  { name: 'Ritual Videographer', category: 'Video' },
  { name: 'Drone', category: 'Equipment' },
  { name: 'Traditional Photographer', category: 'Photo' },
  { name: 'Associate Photographer', category: 'Photo' },
  { name: 'Video Editor', category: 'Post' },
  { name: 'Photo Editor', category: 'Post' },
  { name: 'Spot Lighting', category: 'Equipment' },
  { name: 'LED Wall', category: 'Equipment' },
]

export const AVAILABLE_POST_PRODUCTION = [
  { name: 'Cinematic Teaser', category: 'Video' },
  { name: 'Cinematic Highlight', category: 'Video' },
  { name: 'Short Film', category: 'Video' },
  { name: 'Ritual Video', category: 'Video' },
  { name: 'Highlight Video', category: 'Video' },
  { name: 'Instagram Reels', category: 'Video' },
  { name: 'Edited Photos', category: 'Photo' },
  { name: 'Wedding Album', category: 'Print' },
  { name: 'Wedding Magazine', category: 'Print' },
  { name: 'Photo Book', category: 'Print' },
  { name: 'Raw Data Delivery', category: 'Data' },
  { name: 'Digital Gallery', category: 'Online' },
  { name: 'Same Day Edit', category: 'Video' },
  { name: 'Pre-Wedding Film', category: 'Video' },
]

export const DAY_LABEL_PRESETS = [
  'DAY 1',
  'DAY 2',
  'DAY 3',
  'HALDI',
  'WEDDING',
  'RECEPTION',
  'PRE-WEDDING',
  'MEHNDI',
  'SANGEET',
]

export const STEP_LABELS = [
  'Client Details',
  'Event Days',
  'Services',
  'Post Production',
  'Pricing',
  'Preview',
]
