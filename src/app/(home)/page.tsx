import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <h1 className="text-4xl font-bold pb-5">Bem vindo ao GymGrid</h1>

      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>

        <CardContent>
          <h1 className="text-4xl font-bold">Welcome to the Next.js Starter</h1>
          <p className="mt-4 text-lg">
            This is a starter template for Next.js with Tailwind CSS and
            TypeScript.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
