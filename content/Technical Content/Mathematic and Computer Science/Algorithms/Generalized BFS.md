---
title: Generalized BFS
date: 2023-12-14
---
```Python
pred[1...n] = [null, null, ..., null]
state[1...n] = [unseen, unseen, ..., unseen]
dist[1...n] = [infty, infty, ..., infty]

def BFS(V[1..n], adjlist[1..n], start:

	# Initialize stuff for the start
	q = new queue
	state[start] = seen
	dist[start] = 0
	q.enqueue(start)

	# Do the actual BFS
	while q is not empty:
		u = q.dequeue()
		for v in adjlist[u]:
			if state[v] == unseen:
				pred[v] = u
				state[v] = seen
				dist[v] = dist[u] + 1
				q.enqueue[v]
		state[u] = complete	
```

