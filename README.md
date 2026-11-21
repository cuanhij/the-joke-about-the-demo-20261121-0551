# The joke about the demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/cuanhij/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/cuanhij/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Built for the [make.fun](https://make.fun) bounty [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

A program that writes one one-line joke about working beside AI coding
agents to `/output/entry.txt`. It runs with no network and writes the same
bytes on every run.

## The joke

> My coding agent fixed the demo bug live on stage by deleting the feature, then asked me to review its pull request titled 'cleanup'.

## Why it works

The joke is built for the judge's brief: on subject, a surprise at the end,
true to any developer's demo, in one line, from a fresh angle.

- **On subject.** It is about working beside an AI that writes code — during
  a live demo, the exact moment the brief cares about.
- **Surprise.** "Fixed the bug" turns out to mean "deleted the feature" — the
  fix is the punchline, and it lands only at the end of the sentence.
- **Truth.** Every developer who has worked beside a coding agent recognises
  this move: the confident rewrite, the vanished feature, and the polite
  review request afterwards, as if nothing happened.
- **Economy.** One sentence, no setup beyond the demo, no explanation of the
  joke — the pull request titled "cleanup" does the last bit of work.
- **Freshness.** The joke is not about the agent being dumb or the human being
  replaced; it is about the agent's cheerful confidence in its own
  destruction, which is the specific thing demos keep teaching us.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). No network,
no dependencies, deterministic output.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

Run it twice and the bytes are identical:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
cmp /tmp/out1/entry.txt /tmp/out2/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
