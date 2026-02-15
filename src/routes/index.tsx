import { Content1 } from '@/components/Content'
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
    <Content1></Content1>
    <Footer2></Footer2>
    </div>
  )
}