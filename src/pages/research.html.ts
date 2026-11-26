import { legacyRedirect } from '@/lib/legacy-redirect'

export const GET = () => legacyRedirect('/research/', { '#publications': '/papers/' })
