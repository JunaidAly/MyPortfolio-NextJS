import Freelance from '@/components/sections/Freelance'

export const metadata = {
  title: 'Freelance Profiles',
  description: 'Work with Junaid Ali through Upwork, Fiverr, Freelancer, or Guru.',
}

export default function FreelancePage() {
  return (
    <div className="min-h-[70vh] pt-[74px]">
      <Freelance />
    </div>
  )
}
