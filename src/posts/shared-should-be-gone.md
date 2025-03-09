---
title: "Shared should be gone"
description: Vague terms in determined world
pubDate: "2025-03-09"
---

The longer I have been programming, the more problems I have with "shared" stuff. Even though I work with more and more experienced programmers who have really deep knowledge and create amazing stuff. So maybe the problem is not me or them?

Have you ever wondered what "shared" really means? Could we name concrete boundaries under which we consider something to be shared? Could we guarantee that those boundaries would be respected?

If I take a step back, I can see that "shared" is a vague term whose meaning is almost impossible to define and whose boundaries are impossible to define even within a single project, let alone commonalities between projects.

And where we don't have boundaries, we have windows for complexity growth that translate into support costs. We, humans, produce complexity, not computers, so we have to limit our ambitions by implementing strict boundaries at the code level so that the computer can help us.

So I came to a very bold conclusion.

> "Shared" means we gave up trying to decide on a better name or place for the code.
>
> -- me

As other great programmers have said, naming is one of the two hard things about programming. And "shared" is not a solution, it's a continuation of a problem.

> There are only two hard things in Computer Science: cache invalidation and naming things.
>
> -- Phil Karlton, taken from [Martin Fowler](https://martinfowler.com/bliki/TwoHardThings.html) site

As a result, the shared stuff grows in size, spreading across the codebase until it's too late and too fragile to touch in hopes of making it clearer. Meanwhile, the business asks for "more code", which requires us to use our shared mess again. The circle is closed.

At least we can spend some time and have fun arguing in the comments about the appropriateness of naming/placing things "shared".

The solution, however, is quite simple.

Anything "shared" we have could be named more concretely, placed in a more appropriate location, and that would only add clarity, not subtract it.

Not having "shared" stuff means no more time spent deciding whether new code is "shared" or not. Instead, you think about which is the more appropriate and concrete name or location. And there is always at least one.

---

Very similar situation is with the keyword "base". Seeing this keyword automatically means that there is a second "default" layer, and probably others. Ideally, this would lead to separation into more concrete layers, but in reality it often leads to a more complex code where you have to decide whether to put your changes in the "base" layer or the "default" one.

```jsx
class BaseButton { ... }

class Button extends BaseButton { ... }

class ConcreteButton extends Button { ... }
```

I'm not saying don't split your code. I'm just saying that "base" is also a vague term that hides complexity and creates windows for complexity growth.

Again, the solution is simple. Abandon the idea of a "base" layer altogether.

Start with a single default layer. Once you recognize the need for a different layers, you can create a concrete layers on top of it.

```jsx
class Button { ... }

class ConcreteButton extends Button { ... }

class AnotherConcreteButton extends Button { ... }
```

### Summary

Vague terms like "shared" or "base" are a problem, not a solution. They hide complexity and create windows for complexity to grow. They don't create boundaries, so they can't guarantee code consistency and simplicity. They exist only in our minds, and every programmer has his own interpretation of what they mean. Give up believing in a common understanding of vague terms. Save yourself the trouble of deciding on vague terms, abandon them instead. Always be more concrete. Programming is a determined art.
