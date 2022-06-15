#pragma once
#include <iostream>
#include <vector>
#include <fstream>
#include <queue>
#include <tuple>
using namespace std;


struct Edge {
public:
	int a, b; // a -> b 
	int w;
	int other(int x) {
		if (x == a) return b;
		if (x == b) return a;
		if (x != a && x != b)
			return -1;
	}
};

struct Point {
public:
	int dlina, number;
	bool operator < (const Point& other) const {
		return dlina > other.dlina;
	}
};

static ostream& operator<<(ostream &o, const Edge &e) {
	if (e.a < e.b) {
		o << e.a << "-" << e.b;
	}
	else {
		o << e.b << "-" << e.a;
	}
	return o;
}

class Graph {
public:
	int N;
	ofstream f;

	vector<Edge*> edges; // тут ребра хранятся
	vector<vector<Edge*>> edgesFrom; // ребра из каждой вершины
	vector<int> dlina;
	vector<bool> visited;
	vector<int> prev;

	Graph(int N, string fName);

	Edge& AddEdge(int, int, int = 1);

	void SaveGraph();

	int BFS(int,int);

	~Graph();
};