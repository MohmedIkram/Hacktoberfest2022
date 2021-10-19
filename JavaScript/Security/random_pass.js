
rand  = (a)    => a[Math.floor(Math.random() * a.length)]
chr   = (a)    => String.fromCharCode(a)
print = (...a) => console.log(...a) 

cap   = []
small = []
char  = ['!',"@",'#','$','%','(',')','{','}','[',']','?',':',';','~']
num   = []

for(i=0;i<20;i++){
     num.push(i.toString())
     cap.push(chr(i+65))
   small.push(chr(i+97))
}

list      = cap+small+char+num
rand_list = []
temp = []
while(true){
    k = rand(list)
    print(rand_list.length)
    if(temp.indexOf(k)==-1){
        rand_list.push(k)
    }
    temp.push(k)
    if(rand_list.length==66){
        break;
    }
}

print(rand_list.join(''))
