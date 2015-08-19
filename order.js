// var audi = new Array("black","red","white");
// var bwm = new Array("gold","red","white");
// var chevrolet = new Array("red","yellow");
// var ford = new Array("orange","silvery","white");
// var porsche = new Array("black","red","silvery");
var connection = [[1,1,0,1,0],[0,0,0,1,0],[0,0,0,0,1],[1,0,1,0,0],[1,1,1,0,1],[0,1,0,0,0],[0,0,1,1,0]];
console.log(connection);
var lastEnable = "audi";
var car_type;
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function selCar(obj) {
	if (obj.id != lastEnable) { 
    	obj.className = obj.className.replace("btn-unselected","btn-selected"); 
        document.getElementById(lastEnable).className = document.getElementById(lastEnable).className.replace("btn-selected","btn-unselected");
        lastEnable = obj.id;
    } else {
    	console.log(hasClass(obj,"btn-unselected"));
        if (hasClass(obj,"btn-unselected")) 
            obj.className = obj.className.replace("btn-unselected","btn-selected"); 
        else    	
     		obj.className = obj.className.replace("btn-selected","btn-unselected");          
            
        }
    switch(obj.id){


    }
    car_type = obj.id;
}
