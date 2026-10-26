import Freelance from '@/components/sections/Freelance'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Freelance Full Stack Developer Profiles',
  description: 'Hire Junaid Ali for freelance full-stack and frontend development through Upwork, Fiverr, Freelancer, Guru, or direct contact.',
  path: '/freelance',
})

export default function FreelancePage() {
  return (
    <div className="min-h-[70vh] pt-[74px]">
      <Freelance />
    </div>
  )
}
