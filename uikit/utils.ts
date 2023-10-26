export function clsx(...args: Array<string | undefined>) {
  return args.filter(Boolean).join(" ");
}
