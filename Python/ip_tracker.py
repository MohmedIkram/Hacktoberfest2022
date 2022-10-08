import requests
from json import loads

ip = input("Enter ip address to track: ")
r = requests.get('http://ip-api.com/json/'+ip)
data = loads(r.content)

print('[+] status \t\t\t ',data['status'])
print('[+] country \t\t\t ',data['country'])
print('[+] countryCode \t\t ',data['countryCode'])
print('[+] city \t\t\t ',data['city'])
print('[+] zip \t\t\t ',data['zip'])
print('[+] lat \t\t\t ',data['lat'])
print('[+] lon \t\t\t ',data['lon'])
print('[+] timezone \t\t\t ',data['timezone'])
print('[+] isp \t\t\t ',data['isp'])
print('[+] org \t\t\t ',data['org'])
print('[+] query \t\t\t ',data['query'])