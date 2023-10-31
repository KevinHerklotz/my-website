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
          LET&apos;S CONNECT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Say hello</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            Let&apos;s connect on{' '}
            <a
              href="https://www.linkedin.com/in/kevin-herklotz-70407a153/"
              className="font-bold text-primary hover:text-orange-400"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>
            Or simply send me an email:
            <br />
            <span className="flex gap-2 max-[450px]:flex-col max-[450px]:gap-4 min-[451px]:items-center">
              <a
                href="mailto:hello@clean-code-kevin.ch"
                className="font-bold text-primary hover:text-orange-400"
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
