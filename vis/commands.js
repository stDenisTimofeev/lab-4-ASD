window.prog=`
0
1
2
3
4
5
6
7
8
0-1,label=1
0-2,label=10
2-3,label=2
1-3,label=7
3-4,label=1
4-6,label=2
1-5,label=7
1-6,label=1
5-7,label=5
4-8,label=10
draw
0,color=lime
p,вершина 0 не посещена
0-1,color=red
1,color=blue
w,1000
1,shape=box,color=yellow,label=1;dist:1
p,вершина 0 не посещена
0-2,color=red
2,color=blue
w,1000
2,shape=box,color=yellow,label=2;dist:10
p,Все ребра из вершины 0 просмотрены
0,color=green;white
w,1000
1,color=lime
p,вершина 1 посещена
w,1000
p,вершина 1 не посещена
1-3,color=red
3,color=blue
w,1000
3,shape=box,color=yellow,label=3;dist:8
p,вершина 1 не посещена
1-5,color=red
5,color=blue
w,1000
5,shape=box,color=yellow,label=5;dist:8
p,вершина 1 не посещена
1-6,color=red
6,color=blue
w,1000
6,shape=box,color=yellow,label=6;dist:2
p,Все ребра из вершины 1 просмотрены
1,color=green;white
w,1000
6,color=lime
p,вершина 6 не посещена
4-6,color=red
4,color=blue
w,1000
4,shape=box,color=yellow,label=4;dist:4
p,вершина 6 посещена
w,1000
p,Все ребра из вершины 6 просмотрены
6,color=green;white
w,1000
4,color=lime
p,вершина 4 не посещена
3-4,color=red
3,color=blue
w,1000
3,shape=box,color=yellow,label=3;dist:5
p,вершина 4 посещена
w,1000
p,вершина 4 не посещена
4-8,color=red
8,color=blue
w,1000
8,shape=box,color=yellow,label=8;dist:14
p,Все ребра из вершины 4 просмотрены
4,color=green;white
w,1000
3,color=lime
p,вершина 3 не посещена
2-3,color=red
2,color=blue
w,1000
2,shape=box,color=yellow,label=2;dist:7
p,вершина 3 посещена
w,1000
p,вершина 3 посещена
w,1000
p,Все ребра из вершины 3 просмотрены
3,color=green;white
w,1000
2,color=lime
p,вершина 2 посещена
w,1000
p,вершина 2 посещена
w,1000
p,Все ребра из вершины 2 просмотрены
2,color=green;white
w,1000
5,color=lime
p,вершина 5 посещена
w,1000
p,вершина 5 не посещена
5-7,color=red
7,color=blue
w,1000
7,shape=box,color=yellow,label=7;dist:13
p,Все ребра из вершины 5 просмотрены
5,color=green;white
w,1000
7,color=lime
p,вершина 7 посещена
w,1000
p,Все ребра из вершины 7 просмотрены
7,color=green;white
w,1000
8,color=lime
p,вершина 8 посещена
w,1000
p,Все ребра из вершины 8 просмотрены
8,color=green;white
w,1000
p,Минималный путь до вершины 4 : 4
0-1,color=yellow
1-6,color=yellow
4-6,color=yellow
`