---
layout: page
title: Patents
permalink: /patents/
---

<head>
	<script src="../Scripts/jquery-3.4.1.min.js"></script>
	<script src="../Scripts/jtylka.js"></script>
</head>

<table style="margin: 0 auto;" id="patents_table">
	<tr style="background-color: #20b2aa;">
		<th style="width:25px">#</th><th style="width:300px">Title</th><th style="width:100px">Type</th><th style="width:50px">Year</th>
	</tr>
	<script>
	$(document).ready(function(){
	  $.ajax({
	    type: "GET",
	    url: "../Documents/Tylka_Patents.bib",
	    dataType: "text",
	    success: function(data){
	      $("#patents_table").append(printTable(parseBib(data),["note","year"]));
	    }
	  });
	});
	</script>
</table>

Complete bibliographic data can be found in this <a href="../Documents/Tylka_Patents.bib" target="_blank">BibTeX file</a>. (Last updated September 1<sup>st</sup>, 2025)

Any more recent patents and applications can usually be found easiest through <a href="https://patents.google.com/?inventor=Joseph+TYLKA&num=100" target="_blank">a search on Google Patents</a>.
