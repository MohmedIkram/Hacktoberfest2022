#include<stdio.h>

// variables for queue
int q[20];
int front=0;
int rear=-1;

// initialize a function to search a number in queue
int search(int);

void main()
{
    int i,j,num;

    int vertex,edge,direction;
    printf("Enter\n0 for undirected\n1 for directed:\n");
    scanf("%d",&direction); 
    printf("Enter no of vertex: ");
    scanf("%d",&vertex);
    int bfs[vertex][vertex];
    memset(bfs,0,sizeof(bfs[0][0])*vertex*vertex); //initialization of matrix =0

    printf("Enter no of edges: ");
    scanf("%d",&edge);

    int c,s,d;
    if(direction==0) // matrix for undirected graph
    {
    	for(c=0;c<edge;c++)
    	{
        printf("enter source");
        scanf("%d",&s);
        printf("enter destination");
        scanf("%d",&d);
        bfs[s][d]=1; 
        bfs[d][s]=1; 
    	}	
	}
	else if(direction==1) // matrix for directed graph
	{
		for(c=0;c<edge;c++)
    	{
        printf("enter source");
        scanf("%d",&s);
        printf("enter destination");
        scanf("%d",&d);
        bfs[s][d]=1; 
    	}
	}
	else
	{
		printf("enter 0 or 1 only");
	}
    

    int count=0;
    int k=0;
    int result[vertex];
    rear++;
    q[rear]=0; //start point
    while(1)
    {
        i=q[front];
        count++;
        if(count>vertex)
            break;
        for(j=0;j<vertex;j++)
        {
            if(bfs[i][j])
            {
                num=search(j);
                if(num==1)
                {
                    if(rear==19)
                        printf("overflow");
                    else
                    {
                        rear++;
                        q[rear]=j;
                    }
                }
            }
        }
        result[k]=q[front];
        k++;
        front++;
    }
    // printing order of traversal
	printf("\nThe order of traversal is\n");
    for(i=0;i<vertex;i++)
    {
        printf("%d ",result[i]);
    }
}

// function to search a number in queue
int search(int num)
{
    int i;
    int count=0;
    for(i=0;i<=rear;i++)
    {
        if(num==q[i])
        {
            count=1;
            return 0;
        }
    }
    if(count==0)
        return 1;
}
