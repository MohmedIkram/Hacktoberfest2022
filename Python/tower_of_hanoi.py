# A simple python program to solve Tower of Hanoi problem
# By Anish Shilpakar
# Here I am using recursion to solve the problem

def TowerOfHanoi(n, source, destination, aux):
    if n == 1:
        print("Disk 1 : ",source, "-->", destination)
        return
    TowerOfHanoi(n-1, source, aux, destination)
    print("Disk",n,": ",source, "-->", destination)
    TowerOfHanoi(n-1, aux, destination, source)

def main():
    print("--------------------------------------------------")
    n = int(input("Enter the number of disks: "))
    print("------------------------------------------------\nDisk Movements for Tower of Hanoi Shown Below\n------------------------------------------------\nA: Source tower\nB: Auxillary tower\nC: Destination tower\n------------------------------------------------\n")
    # A is the source disk, C is the destination and B is the auxiliary disk initially
    TowerOfHanoi(n, 'A', 'C', 'B')
    print("------------------------------------------------\nDONE :)\n------------------------------------------------")

if __name__ == "__main__":
    main()