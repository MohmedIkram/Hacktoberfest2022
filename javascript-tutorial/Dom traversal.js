<!DOCTYPE html>
<html id="main">
<head>
	<title>DOM</title>
	<style type="text/css">
		.outer{	
			width: 700px;
			height: 200px;
			background-color: brown;
			position: absolute;
			top: 60%;
			left: 25%;
			border-radius: 10px;
			box-sizing: border-box;
		}
		.inner{
			
			width: 90%;
			height: 70%;
			padding: 6px;
			border:1px solid black;
			position: absolute;
			left: 5%;
			top: 15%;
			border-radius: 10px;
			margin: 4px;
			display: flex;
			box-sizing: border-box;
			background-color: grey;
			justify-content:space-between;

		}
		.inner div{
			border:1px solid black;
		}
		.one{
			
			text-align: center;
			line-height: 110px;
			width: 40%;
			height: 100px;
			margin: 10px;
			background-color: lightgreen;
		}
		.container{
			 
			width: 70%;
			position: relative;
			height: 450px;
			left: 20%;
		}
		.content{
			
			left: 5%; 
			position: absolute;
			width: 90%;
			background-color: #FFFDD0;
			height: 60%;
		}
	</style>
</head>
<body>
<div class="outer" id="outer">
	<h3>Outer</h3>
	<div class="inner" id="inner">
		<h3>Inner</h3>
		<div class="one " id="one">A</div>
		<div class="one ">B</div>
		<div class="one " id="c">C</div>
		<div class="one ">D</div>
		<div class="one ">E</div>
	</div>
</div>

<div class="container">
	<h3 align="center">Append Method in Javascript</h3>
	<div class="content" id="test">
		hello
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quas iste nihil mollitia rem modi praesentium vel obcaecati alias nobis odio explicabo perferendis, dolores fugiat quis laborum dignissimos doloribus ipsam quo eos eligendi aperiam veniam corporis. Quasi soluta ad fugit ipsam, repellat asperiores aspernatur similique voluptatibus, facere fuga voluptatum, consectetur.</p>
	</div>
</div>
<script src="dom traversal.js"></script>
</body>
</html>
