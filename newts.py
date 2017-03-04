import urllib2
import json
from datetime import datetime, date, time

def converttime(s):
    year=int(s[:4])
    month=int(s[5:7])
    date=int(s[8:10])
    hour=int(s[11:13])
    minute=int(s[14:16])
    second=int(s[17:19])
    d=datetime(year,month,date,hour,minute,second)
    return d

response = urllib2.urlopen("http://clist.by/api/v1/contest/?start__year=2017&start__month=3&order_by=start&username=newts&api_key=312f57f9ee5ccb68084c2c6e62b916bd1c36681b")
data = json.load(response)
contests=data["objects"]
upcoming_contest=[]
past_contest=[]
live_contest=[]
for contest in contests:
    start=converttime(contest["start"])
    end=converttime(contest["end"])
    contest["start"]=start
    contest["end"]=end
    if start>datetime.now():
        upcoming_contest.append(contest)
    if end<datetime.now():
        past_contest.append(contest)
    if  start<datetime.now() and end>datetime.now():
        live_contest.append(contest)
print "<---#######################################################Live Contest#########################################---->"
print "\n"
for contest in live_contest:
    print "Contest Name-",contest["event"]
    print "Start time-",contest["start"]
    print "End time-",contest["end"]
    print "Contest Url-",contest["href"]
    print "Status- Live"
    print "\n"

print "<---#######################################################Upcoming Contest#########################################---->"
print "\n"
for contest in upcoming_contest:
    print "Contest Name-",contest["event"]
    print "Start time-",contest["start"]
    print "End time-",contest["end"]
    print "Contest Url-",contest["href"]
    print "Status - Upcoming"
    print "\n"
