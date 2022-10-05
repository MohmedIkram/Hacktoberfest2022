import random

board ={}
print("'Welcome to hangman!'")
print("You will have three chances. Try not to die. Goodluck!")

words = ['table', 'chair', 'bookcase', 'closet']

def show_board(board):
    for each in board:
        print(board[each], end = " ")
        
def setup_board(total):
    for each in range(0, total):
        board[each] = "_"
    
def wordshow(check_list,word_list, chosen, total, past_index=None):
    reveal = random.choice(range(0,total))
    if past_index is not None:
        while past_index == reveal:
            reveal = random.choice(range(0,total))
        letter = check_list[reveal]
        check_and_remove_letter(check_list,word_list,total,letter)
    else:
        letter = check_list[reveal]
        check_and_remove_letter(check_list,word_list,total,letter)
    return reveal
    
def check_and_remove_letter(check_list, word_list, total, letter):
    for each in range(0, total):
        count = 0
        if check_list[each] == letter:
            board[each] = letter
            count +=1
            word_list.remove(letter)

def replay():
    print("Want to play again (y/n)?")
    replay = input()
    if replay == "y" or replay == "Y":
        logic()
    else:
        print("Byee.")
    return
    
def logic():
    lives = 3
    chosen = random.choice(words)
    check_list= list(chosen)
    word_list = list(chosen)
    total = len(chosen)
    setup_board(total)
    if total <= 5 :
            wordshow(check_list,word_list, chosen, total)
    else:
        past_index = wordshow(check_list, word_list, chosen, total)
        wordshow(check_list, word_list, chosen, total, past_index)
    while lives != 0:
        show_board(board)
        print(" ", end = "\n")
        print("Guess a letter ")
        guess = input("")
        if guess.lower() in word_list:
            check_and_remove_letter(check_list, word_list, total, guess.lower())
            print("Correct guess!")
        else:
            lives -= 1
            print("Wrong.One life deducted")
        if word_list == []:
            print("You won! You're saved")
            replay()
            return
        else:
            print("You have" , lives , "lives left.")
    print("Game over.You are now dead!")
    replay()
    return



if __name__ == "__main__":
    logic()