$(document).ready(function(){
    $.getJSON('https://contesttrackerapi.herokuapp.com/android/',
        function(data) {
var html1="";
var html2="";
        var parsed = data;
console.log("Live contest");

        var live_contest=[];
        for (var x=0 ;x< parsed['result']['ongoing'].length;x++) {
            live_contest.push(parsed['result']['ongoing'][x]);
        }
        html1+="<center>";
        for( i in live_contest) {
            console.log(live_contest[i]);
            html1+="Name - "+live_contest[i]['Name']+"<br>";
            html1+="End Time - "+live_contest[i]['EndTime']+"<br>";
            html1+="Platform - "+live_contest[i]['Platform']+"<br>";
            var s="\""+live_contest[i]['url']+"\"";
            html1 +="<a href="+s+">Contest link</a>"+"<br><br>";

        }
        html1+"</center>";
            $("#Live-contest").html(html1);
            console.log("Upcoming Contest");

html2+="<center>";
        var upcoming_contest=[];
        for (var x=0 ;x< parsed['result']['upcoming'].length;x++) {
                upcoming_contest.push(parsed['result']['upcoming'][x]);

            }
            for( i in upcoming_contest) {
                console.log(upcoming_contest[i]);
                html2+="Name - "+upcoming_contest[i]['Name']+"<br>";
                html2+="Start Time - "+upcoming_contest[i]['StartTime']+"<br>";
                html2+="End Time - "+upcoming_contest[i]['EndTime']+"<br>";
                html2+="Duration - "+upcoming_contest[i]['Duration']+"<br>";
                html2+="Platform - "+upcoming_contest[i]['Platform']+"<br><br>";

            }
 html1+="</center>";
            $("#Upcoming-contest").html(html2);
    })});
