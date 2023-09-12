function minReorder(n: number, connections: number[][]): number {

    const graph :Array<[number,number]>[] = [];
    for(let index =0;index<n; index++){
        graph.push([])
    } 

const connectionsSet = new Set<string>();

for (const [a, b] of connections) {
    graph[a].push([b, 1]); // Direction from a to b
    graph[b].push([a, 0]); // Direction from b to a
    connectionsSet.add(`${a},${b}`);
}


function dfs(node: number): void {
    for (const [neighbor, direction] of graph[node]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            if (direction === 1) { // If the road leads towards city 0
                result++;
            }
            dfs(neighbor);
        }
    }
}

const visited = new Set<number>();
let result = 0;

// Start DFS traversal from city 0
visited.add(0);
dfs(0);

return result;

};