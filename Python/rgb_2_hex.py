#RGB to Hex Converter

try:
 # Format: r, g, b
 clr=input()
 rgb=clr.split(',')
 r=rgb[0]
 g=rgb[1]
 b=rgb[2]
 print(f"RBG:rgb({r}, {g}, {b})\nHex: #{int(r):02x}{int(g):02x}{int(b):02x}")

except:
 print(f'Please Use Format: r, g, b\nNot {clr}...') 
