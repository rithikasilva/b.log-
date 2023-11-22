---
title: ECDSA: Detecting the reuse of k.
date: 2021-12-31
---

Many people are familiar with the PS3 exploit discovered in 2010 by the fail0Overflow group. This exploit was the result of Sony reusing the value $k$ in their implementation of the Elliptic Curve Digital Signature Algorithm. By reusing the value for $k$, the private key can be directly calculated (the details of which can be seen [here](https://www.youtube.com/watch?v=LP1t_pzxKyE))

But the answer to "how do you detect $k$ being reused" isn't as prevalent. In order to detect that $k$ is being used, we can take advantage of the nature of elliptic curves in $\mathbb{Z}_p$ for some prime $p$.

We know that the value signature $(r, s)$ can be expressed as:
1. $r = x_{kP} \mod q$
2. $s = \frac{H(m) + \alpha r}{k} \mod q$

where:
- $x_{kP}$ is the x value of the scalar multiplication of $k$ and the generator point $P$ on the elliptic curve of order $q$.
- $H(m)$ is the hash of the message.
- $\alpha$ is such that $\alphaP$ is the public key and $\alpha$ is the private key.
- $q$ is the prime for which $\alpha, k \in_R \mathbb{Z}^*_q$.

Notice that $r$ does change if $k$ is kept the same 👀. This isn't enough to conclude that the same $k$ is being used, but it is the first indicator. If we see the same $r$ value three separate times, we can guarantee that at least two of those signatures used the same value for $k$.

We can do this because **there are at most two points which have the same x-value in an elliptic curve in $\mathbb{Z}_p$ for some prime $p$**. 

Then, the steps used in actual break can be done with three pairs to determine three possible private keys. Then:
1. If two guesses match, the other guess is the private key. This is where we have two of the three that use one key.
2. If all three have the same guess, then we have determined the private key.


