import yargs from 'yargs/yargs'
import type { Argv } from 'yargs'

let currentYargsRef: WeakRef<Argv> | null = null

export const createYargs = (...opts: Parameters<typeof yargs>) => {
  const currentYargs = yargs(...opts)
  currentYargsRef = new WeakRef(currentYargs)
  return currentYargs
}

export const terminalWidth = () =>
  currentYargsRef?.deref()?.terminalWidth() ?? 80
