import { Footer2 } from '@/components/Footer'
import Student from '@/components/Student'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
    <Student></Student>
    <Footer2></Footer2>
    </div>
  )
}