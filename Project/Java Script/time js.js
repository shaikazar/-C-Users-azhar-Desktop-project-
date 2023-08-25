<html>
    <head>
        <title>Time In JavaScript</title>   
    
    
    </head>
    <body>
    var time =7;
    newFunct(time);
    time = 15
    newFunct();
    <script>
    function newFunct(a){     
        if(a >=5 && a<12){
            document.write("good morning");
            document.write("Have A Nice Day");
        }else if(time>=13 && time<=18){
            document.write("Good Afternoon");
        }else if(time>=18 && time<=19.30){
            document.write("Good evening");
        }


        else if(time>=19.31 && time<=24){
            document.write("Good Night");
        }
        
        else{
            document.write("Next Day");
        }
    
    }   

    </script>
    </body>
</html>