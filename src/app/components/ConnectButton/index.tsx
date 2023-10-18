import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CopyButton from './CopyButton'

export default function ConnectButton() {
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
            The easiest way to get in touch is to connect and message me on{' '}
            <a
              href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
              className="text-cyan-700 hover:opacity-70 font-bold"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>
            You can also simply message me via email:
            <br />
            <span className="flex gap-2 max-[450px]:flex-col max-[450px]:gap-4 min-[451px]:items-center">
              <a
                href="mailto:hello@clean-code-kevin.ch"
                className="text-cyan-700 hover:opacity-70 font-bold"
                target="_blank"
              >
                hello@clean-code-kevin.ch
              </a>
              <CopyButton />
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
