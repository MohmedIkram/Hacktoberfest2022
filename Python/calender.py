# Python program to display calendar of
# given month of the year

# import module
import calendar

yy = int(input("Enter Year:"))
mm = int(input("Enter month:"))

# display the calendar
print(calendar.month(yy, mm))
