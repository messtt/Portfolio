<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pression</title>
	<link rel="stylesheet" href="style.css">
</head>
<header>
	<div class="mot"><h1 class="mot_deb">L'humidite est :</h1>
	</header>
<body>
	<!--menu deroulant-->
	<nav>
	<ul>
		<li class="menu_deroulant">
		<a href="#">information</a>
		<ul class="sous_menu1">
			<li><a href="Temp.html"><img class="logo" src="img/1035618.png" width="30" height="30"> Temperature</a></li>
			<li><a href="alti.html"><img class="logo" src="img/234771.png" width="30" height="30"> Altitude</a></li>
			<li><a href="Press.html"><img class="logo" src="img/481430.png" width="30" height="30"> Pression</a></li>
			<li><a href="Humi.html"><img class="logo" src="img/850785.png" width="30" height="30"> Humidite</a></li>
		</ul>
		</li>
		<li class="menu_deroulant">
		<a href="#">Projet</a>
		<ul class="sous_menu2">
			<li><a href="#"><img class="logo" src="img/arduino2.png" width="30" height="30">Code</a></li>
			<li><a href="projet.html"><img class="logo" src="img/1087902.png" width="30" height="30">Projet</a></li>
		</ul>
		</li>

	<!--Fin menu deroulant-->
	<style>


body{
	/*background-image: url(img/thumb-1920-81006.jpg);*/
	margin:0%;
}

section{
	height:100vh;
	background-image:url(img/80533-ligne-design_urbain-carte_de_circuit_imprime-composant_electronique-circuit_electronique-2560x1600.jpg);
	background-size: cover;

}


.mot_deb{
	display: flex;
	border: 3px solid #2f1be4;
	margin-bottom: 0px;
	border-radius: 30px;
	margin: 0px;
	padding: 5%;
	justify-content: center;
	background-color: azure;
}


/*Menu deroulant*/

:root{
	--hauteur-menu: 30px;
  }
  * {
	margin: 0px;
	padding: 1%;
	border-radius: 30px 30px 0px 0px;
	font-family: Montserrat, sans-serif;
  }

  nav {
	width: 100%;
	font-size: 18px;
	position: sticky;
	top: 0;
  }

  nav > ul {
	display: flex;
	text-align: center;
	box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.0);
	height: var(--hauteur-menu);
  }

  nav ul {
	list-style-type: none;
  }

  nav > ul > li {
	background-color: white;
	border-left: 3px solid #2f1be4;
	border-right: 3px solid #2f1be4;
	border-top: 3px solid #2f1be4;
	margin-right: 10px;
	position: relative;
	height: 100%;
	justify-content: space-between;
	flex: 1;
  }

  nav > ul > li > a {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  }

  li a {
	text-decoration: none;
	color: black;
  }

  .menu_deroulant > a:after{
	content: '✜';
	font-size: 20px;
	margin-left: 10px;
	display: inline-block;
  }

  /*Menu information*/
  .sous_menu1{
	margin-top: 30px;
	width: 102.2%;
	margin-left: -21px;
	border-left: 3px solid #2f1be4;
	border-right: 3px solid #2f1be4;
	justify-content: space-between;
	text-align: left;
	background-color: rgb(255, 255, 255);
	border-radius: 0px 0px 0px 0px;
	overflow: hidden;
	max-height: 0;
  }

  .sous_menu1 > li > a {
	height: 50px;
	padding-left: 5px;
	width: 100%;
	align-items: center;
	display: flex;
  }

  .sous_menu1 > li:hover {
	border-radius: 30px;
	background-color: rgba(155, 179, 245, 0.3);
  }

  .sous_menu1 > li:hover > a {
	color: #2f1be4;
  }

  /*Fin menu information*/

  /*Menu projet*/
  .sous_menu2{
	margin-top: 30px;
	width: 102.3%;
	margin-left: -21.6px;
	border-left: 3px solid #2f1be4;
	border-right: 3px solid #2f1be4;
	justify-content: space-between;
	text-align: left;
	background-color: rgb(255, 255, 255);
	border-radius: 0px 0px 0px 0px;
	overflow: hidden;
	max-height: 0;
  }

  .sous_menu2 > li > a {
	height: 50px;
	padding-left: 5px;
	width: 100%;
	align-items: center;
	display: flex;
  }
  .sous_menu2 > li:hover {
	border-radius: 30px;
	background-color: rgba(155, 179, 245, 0.3);
  }

  .sous_menu2 > li:hover > a {
	color: #2f1be4;
  }

  /*Fin menu projet*/




	  nav > ul > li:hover > a{
		color: #2f1be4;
	  }


	  /*Animation fleche*/
	  @keyframes rotationFleche {
		0% {
		  transform: rotate(0deg);
		}
		100%{
		  transform: rotate(360deg);
		}
	  }

	  .menu_deroulant:hover > a:after{
		animation: rotationFleche 0.5s linear forwards;
	  }
	  /*Fin animation fleche*/

	  /*Animation du menu*/

	  @keyframes apparitionSousMenu {
		0% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0);
		  border-right: 3px solid #2f1be4;
		  border-left : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		}
		30% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
		100% {
		  max-height: 50em;
		  border-left : 3px solid #2f1be4;
		  border-right : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
	  }
	  /*Fin animation du menu*/

	  /*Animation menu information*/
	  .menu_deroulant:hover > .sous_menu1 {
		animation: apparitionSousMenu 1s forwards;
	  }

	  /*Fin animation menu information*/

	  /*Animation menu projet*/
	  .menu_deroulant:hover > .sous_menu2 {
		animation: apparitionSousMenu 1s forwards;
	  }
	  /*Fin animation menu projet*/

	  /*Animation menu retour*/

	  @keyframes disparitionSousMenu {
		100% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0);
		  border-right: 3px solid #2f1be4;
		  border-left : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		}
		30% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
		0% {
		  max-height: 50em;
		  border-left : 3px solid #2f1be4;
		  border-right : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
	  }
	  .menu_deroulant > .sous_menu2 {
		animation: disparitionSousMenu 0.5s forwards;
	  }


	  @keyframes disparitionSousMenu {
		100% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0);
		  border-right: 3px solid #2f1be4;
		  border-left : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		}
		30% {
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
		0% {
		  max-height: 50em;
		  border-left : 3px solid #2f1be4;
		  border-right : 3px solid #2f1be4;
		  border-bottom: 3px solid #2f1be4;
		  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
		}
	  }
	  .menu_deroulant > .sous_menu1 {
		animation: disparitionSousMenu 0.5s forwards;
	  }

	  /*Fin animation menu retour*/

	  /*Animation fleche retour*/

	  @keyframes rotationFlecheRetour {
		100% {
		  transform: rotate(0deg);
		}
		0%{
		  transform: rotate(360deg);
		}
	  }

	  .menu_deroulant > a:after{
		animation: rotationFlecheRetour 0.5s linear forwards;
	  }
	  /*Fin animation fleche retour*/


	  /*Animation logo info*/

	  @keyframes rotation_logo {
		0% {
		  transform: rotate(0deg);
		}
		100%{
		  transform: rotate(90deg);
		}
	  }

	  /*.sous_menu > li > a > img.logo:hover > img:after{
		animation: rotation_logo 0.3s linear forwards;
	  }*/
	  </style>

</body>
</html>
