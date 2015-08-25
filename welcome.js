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
		window.location = null;
	}
}

var storage = window.localStorage;
storage["OrderNum"] = 2;
if (!storage.getItem("OrderNum")) 
{
	startcount();
}
else 
{
	window.location = null;
}
