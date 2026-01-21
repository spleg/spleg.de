import glob
import os
import time
import decimal
html_header="""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>spleg.de</title>
</head>
<h1> list of all .html's</h1>
<table>
    <tr>
        <th>name</th>
        <th>last updated</th>
        <th>size</th>
    </tr>
"""
table =""
files = glob.glob('*.html')
files += glob.glob('**/*.html')
subsites=[]
for file in files:
    if (file[len(file)-10:] =="index.html")&(len(file)>10): 
        subsites.append(file[:len(file)-10])
        
files+=subsites
toremove =[]
for sub in subsites:
    for file in files:
        if (file[:len(sub)] == sub )& (len(file) > len(sub)):
            toremove.append(file)
for rm in toremove:
    files.remove(rm)

for file in files:
    ti_c = os.path.getctime(file)
    c_ti = time.ctime(ti_c)
    fsize = round((os.path.getsize(file)*0.001),2)
    if(file[len(file)-1] == "l"):
        table+="""<tr><th><a href= \" """ + file + "\">"+file + "</a></th><th>"+str(c_ti)+"</th><th>"+str(fsize)+" kB</th></tr>"
    else:
        table+="""<tr><th><a href= \" """ + file + "index.html\">"+file + "</a></th><th>"+str(c_ti)+"</th><th>"+str(fsize)+" kB</th></tr>"





genf = open("list.html", "w")

genf.write(html_header)

genf.write(table)
genf.write("</table>")



genf.close()
print("File created successfully!")