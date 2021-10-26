import time
## Binary two's complement to decimal converter


def biner2decimal(binstr):
    new_bin = ""
    carry = "0" * (len(new_bin) - 1) + "1"
    if binstr[0] == "1":
        for index in range(len(binstr)):
            if binstr[index] == "0":
                new_bin += "1"
            elif binstr[index] == "1":
                new_bin += "0"
        sum = int(new_bin, 2) + int(carry, 2)

        return -sum

    elif binstr[0] == "0":
        for x in binstr:
            new_bin += x
        sum = int(new_bin, 2)
        return sum


print("Welcome to binary 2's complement number to decimal number")
print("=" * 30)
binary_nums = input("Input binary 2's complement number : ")
for index in range(1, 4):

    print("Converting" + "." * index)
    time.sleep(0.5)

print(f"\n({binary_nums})2's complement representation in decimal is {biner2decimal(binary_nums)}")
