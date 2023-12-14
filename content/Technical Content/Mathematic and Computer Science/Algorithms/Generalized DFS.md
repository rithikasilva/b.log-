---
title: Generalized DFS
date: 2023-12-14
---
```Python
pred[1...n] = [null, null, ..., null]
state[1...n] = [unseen, unseen, ..., unseen]
disc[1...n] = [0, 0, ..., 0]
fin[1...n] = [0, 0, ..., 0]
time = 0

def FullDFS(adjlist[1...n]):
	for v in 1..m:
		if state[v] == unseen:
			DFS(adjlist, v)

def DFS(adjlist[1..n], v):
	# Update time and set discover time
	state[v] = seen
	time = time + 1
	disc[v] = time

	# Process everything else
	for each w in adjlist[v]:
		if state[w] == unseen:
			pred[w] = v
			DFS(adjlist, w)

	# Update time and set finishing time
	state[v] = complete
	time = time + 1
	fin[v] = time
```

