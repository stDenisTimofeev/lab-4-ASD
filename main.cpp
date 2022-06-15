#include <iostream>
#include "Graph.h"
#include <thread>
using namespace std;

int main()
{
	Graph g(9, "../../../vis/commands.js");
	g.AddEdge(0, 1, 1);
	g.AddEdge(0, 2, 10);
	g.AddEdge(3, 2, 2);
	g.AddEdge(1, 3, 7);
	g.AddEdge(4, 3, 1);
	g.AddEdge(4, 6, 2);
	g.AddEdge(1, 5, 7);
	g.AddEdge(1, 6, 1);
	g.AddEdge(5, 7, 5);
	g.AddEdge(4, 8, 10);

	g.SaveGraph();
	cout << g.BFS(0, 4) << endl;
	return 0;
}
