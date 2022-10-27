from turtle import *

#
# CS 1400 Assignment 2. Written by David Johnson and
# This code, as it is now or after modification, may not be shared or uploaded to any public site.
# It may be uploaded to the course approved assignment submission system.

# Draw a square with a Python turtle.
# Do not modify this.


def draw_square():
    for side in range(4):
        art_turtle.forward(25)
        art_turtle.left(90)

# Draw a wall of ten blocks with a little space between each one.


def draw_wall():
    # pass  # The pass command means do nothing. Python wants at least one statement after the :. So I used pass. You should delete this line.
    for i in range(0, 301, 30):
        draw_square()
        art_turtle.penup()
        art_turtle.goto(-150+i, 250)
        art_turtle.pendown()

# Draw a simple face with a head, a mouth, and two eyes.


def draw_face():
    # for head
    art_turtle.circle(100)
    # for mouth
    art_turtle.penup()
    art_turtle.goto(0, -65)
    art_turtle.pendown()
    art_turtle.circle(30)
    # for eyes
    # right eye
    art_turtle.penup()
    art_turtle.goto(-35, 10)
    art_turtle.pendown()
    art_turtle.circle(10)
    # left eye
    art_turtle.penup()
    art_turtle.goto(35, 10)
    art_turtle.pendown()
    art_turtle.circle(10)

# Replace this comment with one describing your object.
# Rename draw_object to something more descriptive to your
# object. Change the call to draw_object in the code below to
# the new name.


def nose():
    art_turtle.forward(20)
    art_turtle.left(120)
    art_turtle.forward(20)
    art_turtle.left(120)
    art_turtle.forward(20)
    art_turtle.left(0)


def eyes_retina(pos_x_1, pos_y_1, pos_x_2, pos_y_2, rad_1, rad_2):
    art_turtle.penup()
    art_turtle.goto(pos_x_1, pos_y_1)
    art_turtle.pendown()
    art_turtle.circle(rad_1)

    # for retina
    art_turtle.shape("circle")
    art_turtle.fillcolor("black")

    art_turtle.penup()
    art_turtle.goto(pos_x_2, pos_y_2)
    art_turtle.pendown()
    art_turtle.begin_fill()
    art_turtle.circle(rad_2)
    art_turtle.end_fill()


def body(pos_x, pos_y, rad):
    art_turtle.circle(50, 180)
    art_turtle.forward(80)
    art_turtle.circle(50, 180)
    art_turtle.forward(80)
    # --- belly
    art_turtle.penup()
    art_turtle.goto(pos_x, pos_y)
    art_turtle.pendown()
    art_turtle.circle(rad)

# drawing penguin


def draw_penguin(pos_x_1, pos_y_1, pos_x_2, pos_y_2, pos_x_3, pos_y_3, rad_1, rad_2, rad_3):
    body(pos_x_1, pos_y_1, rad_1)
    eyes_retina(pos_x_2, pos_y_2, pos_x_3, pos_y_3, rad_2, rad_3)
    eyes_retina(pos_x_2 + 50, pos_y_2, pos_x_3 + 50, pos_y_3, rad_2, rad_3)
    art_turtle.penup()
    art_turtle.goto(pos_x_2 + 30, pos_y_2 - 20)
    art_turtle.pendown()
    art_turtle.right(-30)
    nose()


# The following code uses the functions above to draw different things on the screen.
# You should not need to modify this code except to rename the calls to draw_object
# to a more descriptive name.


# Set up the window and turtle
window = Screen()
art_turtle = Turtle()
art_turtle.speed(0)


# Move to the top of the screen and draw a wall
art_turtle.penup()
art_turtle.goto(-150, 250)
art_turtle.pendown()
draw_wall()

# Move to the top middle and draw a face
art_turtle.penup()
art_turtle.goto(0, -100)
art_turtle.pendown()
draw_face()

# Move to the bottom left and draw an object
art_turtle.penup()
art_turtle.goto(-200, -300)
art_turtle.setheading(0)
art_turtle.pendown()
art_turtle.right(90)
draw_penguin(-180, -300, -185, -210, -180, -210, 30, 15, 10)


# Move to the bottom right and draw an object
art_turtle.penup()
art_turtle.goto(150, -300)
art_turtle.pendown()
art_turtle.right(-90)
draw_penguin(170, -300, 165, -210, 170, -210, 30, 15, 10)


art_turtle.hideturtle()  # Get rid of the arrow showing the turtle location.

window.exitonclick()
