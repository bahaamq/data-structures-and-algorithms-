# Graphs
𝑮𝒓𝒂𝒑𝒉 𝒊𝒔 𝒂 𝒏𝒐𝒏 𝒍𝒊𝒏𝒆𝒂𝒓 𝒅𝒂𝒕𝒂 𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 𝒕𝒉𝒂𝒕 𝒉𝒂𝒔 𝒏𝒐𝒅𝒆𝒔 𝒄𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅 𝒃𝒆𝒕𝒘𝒆𝒆𝒏 𝒆𝒂𝒄𝒉 𝒐𝒕𝒉𝒆𝒓 𝒃𝒚 𝒆𝒅𝒈𝒆𝒔𝑯𝒆𝒓𝒆 𝒊𝒔 𝒔𝒐𝒎𝒆 𝒄𝒐𝒎𝒎𝒐𝒏 𝒕𝒆𝒓𝒎𝒊𝒏𝒐𝒍𝒐𝒈𝒚 𝒖𝒔𝒆𝒅 𝒘𝒉𝒆𝒏 𝒘𝒐𝒓𝒌𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝑮𝒓𝒂𝒑𝒉𝒔:𝑽𝒆𝒓𝒕𝒆𝒙 - 𝑨 𝒗𝒆𝒓𝒕𝒆𝒙, 𝒂𝒍𝒔𝒐 𝒄𝒂𝒍𝒍𝒆𝒅 𝒂 “𝒏𝒐𝒅𝒆”, 𝒊𝒔 𝒂 𝒅𝒂𝒕𝒂 𝒐𝒃𝒋𝒆𝒄𝒕 𝒕𝒉𝒂𝒕 𝒄𝒂𝒏 𝒉𝒂𝒗𝒆 𝒛𝒆𝒓𝒐 𝒐𝒓 𝒎𝒐𝒓𝒆 𝒂𝒅𝒋𝒂𝒄𝒆𝒏𝒕 𝒗𝒆𝒓𝒕𝒊𝒄𝒆𝒔.


## Approach & Efficiency
If \boldsymbol {m} is the number of edges in a graph, then the time complexity of building such a list is \boldsymbol{O(m)}. The space complexity is \boldsymbol{O(n + m)}. But, in the worst case of a complete graph, which contains {n \choose 2} edges, the time and space complexities reduce to O(n^2).
https://www.baeldung.com/cs/adjacency-matrix-list-complexity


## API
<!-- Description of each method publicly available in your Graph -->
add node
Arguments: value
Returns: The added node
Add a node to the graph
add edge
Arguments: 2 nodes to be connected by the edge, weight (optional)
Returns: nothing
Adds a new edge between two nodes in the graph
If specified, assign a weight to the edge
Both nodes should already be in the Graph
get nodes
Arguments: none
Returns all of the nodes in the graph as a collection (set, list, or similar)
get neighbors
Arguments: node
Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection
size
Arguments: none
Returns the total number of nodes in the graph
