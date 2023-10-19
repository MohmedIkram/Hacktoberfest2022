# for reference see the images in the folder

import math
# Missionaries and Cannibals Problem
class State():
    def __init__(self, cannibalLeft, missionaryLeft, boat, cannibalRight,missionaryRight):
        self.cannibalLeft = cannibalLeft
        self.missionaryLeft = missionaryLeft
        self.boat = boat
        self.cannibalRight = cannibalRight
        self.missionaryRight = missionaryRight
        self.parent = None

    def is_goal(self):
        if self.cannibalLeft == 0 and self.missionaryLeft == 0:
            return True
        else:
            return False

    def is_valid(self):
        if self.missionaryLeft >= 0 and self.missionaryRight >= 0 \
          and self.cannibalLeft >= 0 and self.cannibalRight >= 0 \
          and (self.missionaryLeft == 0 or self.missionaryLeft >= self.cannibalLeft) \
          and (self.missionaryRight == 0 or self.missionaryRight >=self.cannibalRight):
          return True
        else:
            return False

    def __eq__(self, other):
        return self.cannibalLeft == other.cannibalLeft and self.missionaryLeft == other.missionaryLeft \
               and self.boat == other.boat and self.cannibalRight == other.cannibalRight \
               and self.missionaryRight == other.missionaryRight

    def __hash__(self):
        return hash((self.cannibalLeft, self.missionaryLeft, self.boat,self.cannibalRight, self.missionaryRight))


def successors(cur_state):
    children = [];
    if cur_state.boat == 'left':
        new_state = State(cur_state.cannibalLeft, cur_state.missionaryLeft -2, 'right',cur_state.cannibalRight, cur_state.missionaryRight + 2)
        ## Two missionaries cross left to right.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft - 2,cur_state.missionaryLeft, 'right',cur_state.cannibalRight + 2, cur_state.missionaryRight)

        ## Two cannibals cross left to right.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft - 1, cur_state.missionaryLeft- 1, 'right',cur_state.cannibalRight + 1, cur_state.missionaryRight + 1)

        ## One missionary and one cannibal cross left to right.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft, cur_state.missionaryLeft-1, 'right',cur_state.cannibalRight, cur_state.missionaryRight + 1)

        ## One missionary crosses left to right.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft - 1,cur_state.missionaryLeft, 'right',cur_state.cannibalRight + 1, cur_state.missionaryRight)

        ## One cannibal crosses left to right.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
    
    else:
        new_state = State(cur_state.cannibalLeft, cur_state.missionaryLeft +2, 'left',cur_state.cannibalRight, cur_state.missionaryRight - 2)

        ## Two missionaries cross right to left.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft + 2,cur_state.missionaryLeft, 'left',cur_state.cannibalRight - 2, cur_state.missionaryRight)
        
        ## Two cannibals cross right to left.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft + 1, cur_state.missionaryLeft+ 1, 'left',cur_state.cannibalRight - 1, cur_state.missionaryRight - 1)

        ## One missionary and one cannibal cross right to left.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft, cur_state.missionaryLeft +1, 'left',cur_state.cannibalRight, cur_state.missionaryRight - 1)

        ## One missionary crosses right to left.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)
        new_state = State(cur_state.cannibalLeft + 1,cur_state.missionaryLeft, 'left',
            cur_state.cannibalRight - 1, cur_state.missionaryRight)
        
        ## One cannibal crosses right to left.
        if new_state.is_valid():
            new_state.parent = cur_state
            children.append(new_state)

    return children

def breadth_first_search():
    initial_state = State(3,3,'left',0,0)
    if initial_state.is_goal():
        return initial_state
    
    frontier = list()
    explored = set()
    frontier.append(initial_state)
    while frontier:
        state = frontier.pop(0)
        if state.is_goal():
            return state

        explored.add(state)
        children = successors(state)
        for child in children:
            if (child not in explored) or (child not in frontier):
                frontier.append(child)
    return None


def print_solution(solution):
    path = []
    path.append(solution)
    parent = solution.parent
    while parent:
        path.append(parent)
        parent = parent.parent
    
    for t in range(len(path)):
        state = path[len(path) - t - 1]
        print ("(" + str(state.cannibalLeft) + "," +str(state.missionaryLeft) \
                + "," + state.boat + "," + str(state.cannibalRight) + "," + \
                str(state.missionaryRight) + ")")

def main():
    solution = breadth_first_search()
    print ("Missionaries and Cannibals solution:")
    print ("(cannibalLeft,missionaryLeft,boat,cannibalRight,missionaryRight)")
    print_solution(solution)


# if called from the command line, call main()
if __name__ == "__main__":
    main()
    
    
# output here 
# Missionaries and Cannibals solution:
# (cannibalLeft,missionaryLeft,boat,cannibalRight,missionaryRight)
# (3,3,left,0,0)
# (1,3,right,2,0)
# (2,3,left,1,0)
# (0,3,right,3,0)
# (1,3,left,2,0)
# (1,1,right,2,2)
# (2,2,left,1,1)
# (2,0,right,1,3)
# (3,0,left,0,3)
# (1,0,right,2,3)
# (1,1,left,2,2)
# (0,0,right,3,3)

    
