var count=0;

function startcount(){　 
	count = count + 2;
	console.log( count + "%" );
	if (count < 99)
	{
		setTimeout("startcount()",100);
	}
	else
	{
		window.location = ;
	}
}

var storage = window.localStorage;
if (!storage.getItem("OrderNum")) 
{
	startcount();
}
else 
{
	window.location = ;
}
