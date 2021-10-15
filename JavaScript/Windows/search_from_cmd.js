let exe = require('child_process').exec
let arg = process.argv.slice(2,process.argv.length).join(" ").split(',')
let obj={}
for(i=0;i<arg.length;i++){
  a=arg[i].split(':')
  obj[a[0]]=a[1]
}
let [duck,google] = [' https://duckduckgo.com/?q=',' https://www.google.com/search?q=']
cmd='start ';
cmd+=!obj.b ? 'brave ' : obj.b=='c' ?  'chrome ' : 'brave ';
if(obj.url){
  exe(cmd+obj.url)
}
else{
  cmd+=!obj.e ? duck : obj.e=='g' ? google : duck
  str=arg.join(' ')
  if(!str.match('q:') && !str.match('e:') && !str.match('b:')){
    cmd+=arg[0].split(' ').join('+')
  }
  else{
    cmd+=!obj.q ? 'nothing' : obj.q.split(' ').join('+')
  }
  exe(cmd)
}
