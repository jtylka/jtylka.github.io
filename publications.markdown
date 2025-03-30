---
layout: page
title: Publications
permalink: /publications/
---

<head>
	<script src="../Scripts/jquery-3.4.1.min.js"></script>
	<script src="../Scripts/jtylka.js"></script>
</head>

<table style="margin: 0 auto;" id="publications_table">
	<tr style="background-color: #20b2aa;">
		<th style="width:25px">#</th><th style="width:300px">Title</th><th style="width:50px">Year</th>
	</tr>
	<script>
	$(document).ready(function(){
	  $.ajax({
	    type: "GET",
	    url: "../Documents/Tylka_Publications.bib",
	    dataType: "text",
	    success: function(data){
	      $("#publications_table").append(printTable(parseBib(data),["year"]));
	    }
	  });
	});
	</script>
</table>

Complete bibliographic data can be found in this <a href="../Documents/Tylka_Publications.bib" target="_blank">BibTeX file</a>. (Last updated February 25<sup>th</sup>, 2024)
