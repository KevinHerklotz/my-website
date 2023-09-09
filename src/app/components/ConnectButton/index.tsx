import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ConnectButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="default">
          Let&apos;s connect
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Let&apos;s connect</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            The easiest way to connect is to add and message me on{' '}
            <a
              href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
              className="text-cyan-700 hover:opacity-70"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>
            You can also simply write me an email:{' '}
            <a
              href='mailto:"kevin.herklotz@proton.me"'
              className="text-cyan-700 hover:opacity-70"
              target="_blank"
            >
              kevin.herklotz@proton.me
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
