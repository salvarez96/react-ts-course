type Options = {
  props: Record<string, string | number | [] | undefined>
  callback: () => void
}

interface Window {
  plausible: (event: 'add_fox' | 'remove_fox', options?: Partial<Options>) => void
}