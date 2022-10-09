// Problem Statement -
// Given a graph, a source vertex and a destination vertex. find and print all paths between source and destination. 
// Print them in lexicographical order.

// Sample Input :

/*
7
8
0 1 10
1 2 10
2 3 10
0 3 10
3 4 10
4 5 10
5 6 10
4 6 10
0
6
*/

// Sample Output :

/*
0123456
012346
03456
0346
*/

import java.io.*;
import java.util.*;

public class Main {
   static class Edge {
      int src;
      int nbr;
      int wt;

      Edge(int src, int nbr, int wt) {
         this.src = src;
         this.nbr = nbr;
         this.wt = wt;
      }
   }

   public static void main(String[] args) throws Exception {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      int vtces = Integer.parseInt(br.readLine());
      ArrayList<Edge>[] graph = new ArrayList[vtces];
      for (int i = 0; i < vtces; i++) {
         graph[i] = new ArrayList<>();
      }

      int edges = Integer.parseInt(br.readLine());
      for (int i = 0; i < edges; i++) {
         String[] parts = br.readLine().split(" ");
         int v1 = Integer.parseInt(parts[0]);
         int v2 = Integer.parseInt(parts[1]);
         int wt = Integer.parseInt(parts[2]);
         graph[v1].add(new Edge(v1, v2, wt));
         graph[v2].add(new Edge(v2, v1, wt));
      }

      int src = Integer.parseInt(br.readLine());
      int dest = Integer.parseInt(br.readLine());

      
      String psf=src+"";
      boolean[] visited=new boolean[vtces];
      printPaths(graph,src,dest,visited,psf); 
   }

//    recursive function to print all paths in a graph
   public static void printPaths(ArrayList<Edge>[] graph,int src,int dest,boolean[] visited,String psf){
       
       // Base Case , when src and dest vertex are equal , print path so far(psf) and return
       if(src==dest){
           System.out.println(psf);
           return;
       }
       
       visited[src]=true; // mark visited as soon as we come to a vertex
       for(Edge e:graph[src]){
           int nbr=e.nbr;
         // only make call to unvisited neigbour of a vertex
           if(visited[nbr]==false){
               printPaths(graph,nbr,dest,visited,psf+nbr);
           }
       }
       
       visited[src]=false; // mark unvisited at every vertex while returning from the function 
       
   }
       
}
