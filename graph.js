class Graph {
    constructor() {
        this.adjacent = {}
    }

    addVertex(vertex) {
        if (!this.adjacent[vertex]) {
            this.adjacent[vertex] = new Set()
        }
    }

    addEdge(vertex, edge) {
        if (!this.adjacent[vertex]) {
            this.addVertex(vertex)
        }

        if (!this.adjacent[edge]) {
            this.addVertex(edge)
        }

        this.adjacent[vertex].add(edge)
        this.adjacent[edge].add(vertex)
    }

    removeEdge(vertex, edge) {
        if (this.adjacent[vertex]) {
            this.adjacent[vertex].delete(edge)
        }
    }

    removeVertex(vertex) {
        for (const edge of this.adjacent[vertex]) {
            this.removeEdge(edge, vertex)
        }
        delete this.adjacent[vertex]
    }



    display() {
        for (const vertex in this.adjacent) {
            console.log(vertex + '->' + [...this.adjacent[vertex]])
        }
    }

    bfs(vertex) {
        let visited = new Set()
        let queue = []
        visited.add(vertex)
        queue.push(vertex)
        while (queue.length) {
            let cur = queue.shift()
            console.log(cur)
            for (let ver of this.adjacent[cur]) {
                if (!visited.has(ver)) {
                    visited.add(ver)
                    queue.push(ver)
                }
            }
        }
    }

    dfs(vertex) {
        let visited = new Set()
        this.dfsHelper(vertex, visited)
    }

    dfsHelper(vertex, visited) {
        visited.add(vertex)
        console.log(vertex);
        for (let ver of this.adjacent[vertex]) {
            if (!visited.has(ver)) {
                this.dfsHelper(ver, visited)
            }
        }
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('C', 'B')
// graph.removeEdge('C', 'B')
// graph.removeVertex('B')
graph.display()
graph.bfs('C')
graph.dfs('C')