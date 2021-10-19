<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            padding: 0 20px 30px 0;
            line-height: 1.4;
        }

        .flex-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 500px;
            border: 2px slateblue solid;
            align-content: center;
        }

        .flex-item {
            width: 75px;
            height: 75px;
            background-color: lightblue;
            border: 2px solid darkblue;
            text-align: center;
            font-size: 2em;
            color: white;
            font-weight: bold;
            line-height: 1.4;
            flex-flow: row wrap;

        }
        #flex-item-1{
            /* flex-basis: 200px; Maximum width */
            background-color: lightpink;
            flex-grow: 2; /*Grows relative to other elements*/
            flex-shrink: 3;/*shinks relative to other elements*/
        }

        #flex-item-2{
            background-color: lightskyblue;
        }

        #flex-item-3{
            background-color: lightgreen;
        }

        #flex-item-4{
            background-color: darkkhaki;
        }

        #flex-item-5{
            background-color: lightcoral;
        }


        
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item" id="flex-item-1">1</div>
        <div class="flex-item" id="flex-item-2">2</div>
        <div class="flex-item" id="flex-item-3">3</div>
        <div class="flex-item" id="flex-item-4">4</div>
        <div class="flex-item" id="flex-item-5">5</div>
        
    </div>
</body>
</html>
