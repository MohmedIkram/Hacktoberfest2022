def minion_game(word):
    kevin_score = stuart_score = 0
    for i in range(len(s)):
        #checking if the alphabet is a vowel
        if s[i] in 'AEIOU':
            #adding the total length of string from that alphabet till ending to kevin_score
            kevin_score += (len(s)-i)
        #if it is a consonant
        else:
            #adding the total length of string from that alphabet till ending to stuart_score
            stuart_score += (len(s)-i)
    if kevin_score > stuart_score:
        print("Kevin", kevin_score)
    elif kevin_score < stuart_score:
        print("Stuart", stuart_score)
    else:
        print("Draw")
if __name__ == '__main__':
    s = input()
    minion_game(s)
