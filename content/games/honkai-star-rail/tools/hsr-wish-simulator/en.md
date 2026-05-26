---
title: "HSR Wish Simulator"
description: "Web simulator for Honkai: Star Rail warps with the real pity rates. Sandbox to test luck virtually without spending jades."
quickTake: "Not a serious tool, it's a sandbox to see how much pity you'd need without spending jades. Useful for managing expectations before pulling for real."
---

## What it is

HSR Wish Simulator is a free web app that reproduces the gacha mechanic of Honkai: Star Rail. You pick an active or historical banner, do virtual "warps" with the fake currency the app gives you, and see what would land using the real rates and pity system from the game.

It doesn't connect with your account. It doesn't track anything real. It doesn't require login. It's strictly a practice simulator that reproduces the official probabilities: 0.6% base 5★, soft pity starting around warp 74, hard pity at 90, the 50/50 system with guarantee on the next 5★, etc.

Hosted at `hsr.wishsimulator.app`, maintained by the community. The interface imitates the game's so it feels familiar: warp animation, character splash, pity counter, all of it.

## What problem it solves

The most frequent questions before a banner are like "with 90 warps, what's my real chance of getting the character?" or "if I go to 50/50, what happens if I lose?". Theoretical answers exist in spreadsheets and articles, but abstract.

The simulator turns those questions into concrete experience. You do 100 virtual pulls and see what landed. You repeat it several times and start having intuition for the real variance: sometimes it drops at 60, sometimes it goes to hard pity, sometimes you lose the 50/50 and sometimes you win.

That intuition helps plan better before spending real jades. If you discover by simulating that half the time the character costs 120+ warps, you can decide more informed if you have the resources to go.

## Differentiation (vs similar-cluster tools)

It's crucial not to confuse it with Star Rail Station (SRS). SRS tracks real warps you've already done, reading your account's history. WishSim does virtual warps that never happened. They cover opposite questions: SRS answers "what did I do", WishSim answers "what could happen".

Combined they're useful: you use SRS to audit your past luck and WishSim to estimate your future luck before committing resources. But they're different tools and they get confused often in community posts.

It's also not a pure probability calculator. If you want the mathematical formula for expected pity, there are dedicated calculators that return numbers. WishSim gives you the experience, not the formula.

## What people use it for

**Managing expectations before a banner**: simulating several runs of 90 pulls shows you the realistic range of outcomes. Useful to avoid entering the banner with optimistic expectations that later generate frustration.

**Practicing pull order without risk**: for new players who still don't understand the 50/50 and pity transfer system, doing virtual warps speeds up learning at no cost.

**Simulating "what if I lose the 50/50" scenarios**: you pull until the first 5★ and if you lose, you keep going until guarantee. Gives you a concrete idea of how many warps that worst-case situation adds up to.

**Testing luck for pure entertainment**: sometimes you just want to feel the dopamine of the warp animation without spending real resources. It's valid and the app does it well.

**Showing results in clips or memes**: because the animation imitates the game's, it works for creating humorous content like "I simulated 1000 warps on Acheron, this happened".

## Who this tool isn't for

If you want to track your real pulls to see your current pity or historical luck, this isn't for you. You need Star Rail Station, which reads your real account history.

If you're looking to calculate the exact probability of success in X pulls (a percentage), a mathematical calculator is better than a stochastic simulator. WishSim gives you a sample, not the formula.

If you tend to develop compulsive gacha behaviors, doing virtual warps may normalize the pulling frequency and predispose you to spend more later. If that's your profile, better not even open this kind of tool.

## How it works in practice

1. Go to `hsr.wishsimulator.app` from your browser.

2. Pick the banner you want to simulate (current or past, depending on what the app has).

3. The app gives you a quantity of virtual currency or lets you do unlimited warps, depending on the mode.

4. Pull warps one by one or in batches of 10, like in the game.

5. Watch how much pity you accumulate and when your first 5★ drops.

6. If you want to simulate the worst case, assume you lose the 50/50 and keep pulling until the next guarantee.

7. Repeat the exercise several times. One simulation says little, ten give you a sense of the range.

8. Note results (by hand or mentally) to draw conclusions like "in 10 runs, the range was 70-140 warps for the target".

## Honest limitations

**It doesn't predict your real luck**: each warp in the game is independent. Simulating well doesn't mean you'll have good real luck. The function is educational, not individually predictive.

**It can normalize gacha spending**: doing virtual warps freely can get you used to the pulling rhythm and make you spend more later without noticing. Real risk for sensitive profiles.

**Rates are the published ones, not the observed ones**: HoYoverse publishes the official probabilities but the community sometimes notices deviations in large samples. The simulator uses the official ones, assume that baseline.

**Doesn't include departure banners or weapon banners with the same fidelity**: coverage is mainly for limited character banners. Other types may be simplified or absent.

**Doesn't replace an informed decision**: simulating helps calibrate expectations but the decision to pull depends on your real resources, roster priorities and context the simulator doesn't know.

**Just entertainment, no clear strategic value**: unlike Fribbels or StarGuide, this doesn't improve your game in a measurable way. Honest fun, nothing more.

## How to get started

No installation or registration required. Go to `hsr.wishsimulator.app`, pick a banner and start pulling warps.

For the experience to be informative more than just entertainment, we recommend defining an experiment before starting: for example, "I'm going to do 5 runs of 90 warps each and note how many 5★ characters I got in each one". Having that structure turns a click session into useful data for your next real banner.

For tracking your real luck, this isn't useful. For that move to Star Rail Station, which is the dedicated tool for that case.
