var connection = [["car/audi_white.jpg","car/bwm_white.jpg",0,"car/ford_white.jpg",0],[0,0,0,"car/ford_orange.jpg",0],[0,0,0,0,"car/chevrolet_yellow.jpg"],["car/audi_black.jpg",0,"car/porsche_black.jpg",0,0],["car/audi_red.jpg","car/bwm_red.jpg","car/porsche_red.jpg",0,"car/chevrolet_red.jpg"],[0,"car/bwm_gold.jpg",0,0,0],[0,0,"car/porsche_silvery.jpg","car/ford_silvery.jpg",0]];
var car_name = [["奥迪R8 （白）","宝马335i （白）",0,"福特野马 （白）",0],[0,0,0,"福特野马 （橙）",0],[0,0,0,0,"雪弗兰科迈罗 （黄）"],["奥迪R8 （黑）",0,"保时捷Panamera （黑）",0,0],["奥迪R8 （红）","宝马335i （红）","保时捷Panamera （红）",0,"car/雪弗兰科迈罗 （红）"],[0,"宝马335i （金）",0,0,0],[0,0,"保时捷Panamera （银）","福特野马 （银）",0]]
var lastType = "type100";
var lastColor = "color100";
var car_type = -1;
var car_color = -1;
var car_image = "car/audi_white.jpg";
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function selCar(obj,fun,index) {
    if(hasClass(obj,"btn-disabled"))
        return;
    if(fun==0){
        for (var i = 0;i<7;i++) {
            if(hasClass(document.getElementById("color"+i),"btn-disabled"))
                document.getElementById("color"+i).className = document.getElementById("color"+i).className.replace("btn-disabled","btn-unselected");                       
        }
    	if (obj.id != lastType) { 
           obj.className = obj.className.replace("btn-unselected","btn-selected"); 
           if(document.getElementById(lastType))
                document.getElementById(lastType).className = document.getElementById(lastType).className.replace("btn-selected","btn-unselected");
           lastType = obj.id;
           for (var i = 0;i<7;i++) {
                if (connection[i][index]==0){
                    if(hasClass(document.getElementById("color"+i),"btn-selected"))
                        document.getElementById("color"+i).className = document.getElementById("color"+i).className.replace("btn-selected","btn-disabled"); 
                    else
                        document.getElementById("color"+i).className = document.getElementById("color"+i).className.replace("btn-unselected","btn-disabled"); 
                }               
            }
            car_type = index;
            if (car_color != -1) {
                document.getElementById("car-img").src = connection[car_color][car_type];
                document.getElementById("car-name").innerHTML = car_name[car_color][car_type];
            }
        } else {
            if (hasClass(obj,"btn-unselected")) {
                obj.className = obj.className.replace("btn-unselected","btn-selected"); 
                for (var i = 0;i< 7;i++) {
                    if (connection[i][index]==0){
                        if(hasClass(document.getElementById("color"+i),"btn-selected"))
                            document.getElementById("color"+i).className = document.getElementById("color"+i).className.replace("btn-selected","btn-disabled"); 
                        else
                            document.getElementById("color"+i).className = document.getElementById("color"+i).className.replace("btn-unselected","btn-disabled"); 
                    }                       
                }
                car_type = index;
                if(car_color != -1) {
                    document.getElementById("car-img").src = connection[car_color][car_type];
                    document.getElementById("car-name").innerHTML = car_name[car_color][car_type];
                }
            }
            else    	
             obj.className = obj.className.replace("btn-selected","btn-unselected");   
             car_type = -1;       
     }
 }
 else{
    for (var i = 0;i<5;i++) {
            if(hasClass(document.getElementById("type"+i),"btn-disabled"))
                document.getElementById("type"+i).className = document.getElementById("type"+i).className.replace("btn-disabled","btn-unselected");                       
        }
        if (obj.id != lastColor) { 
           obj.className = obj.className.replace("btn-unselected","btn-selected"); 
           if(document.getElementById(lastColor))
                document.getElementById(lastColor).className = document.getElementById(lastColor).className.replace("btn-selected","btn-unselected");
           lastColor = obj.id;
           for (var i = 0;i<5;i++) {
                if (connection[index][i]==0){
                    if(hasClass(document.getElementById("type"+i),"btn-selected"))
                        document.getElementById("type"+i).className = document.getElementById("type"+i).className.replace("btn-selected","btn-disabled"); 
                    else
                        document.getElementById("type"+i).className = document.getElementById("type"+i).className.replace("btn-unselected","btn-disabled"); 
                }               
            }
            car_color = index;
            if (car_type != -1) {
                document.getElementById("car-img").src = connection[car_color][car_type];
                document.getElementById("car-name").innerHTML = car_name[car_color][car_type];
            }
        } else {
            if (hasClass(obj,"btn-unselected")) {
                obj.className = obj.className.replace("btn-unselected","btn-selected"); 
                for (var i = 0;i< 5;i++) {
                    if (connection[index][i]==0){
                        if(hasClass(document.getElementById("type"+i),"btn-selected"))
                            document.getElementById("type"+i).className = document.getElementById("type"+i).className.replace("btn-selected","btn-disabled"); 
                        else
                            document.getElementById("type"+i).className = document.getElementById("type"+i).className.replace("btn-unselected","btn-disabled"); 
                    }                       
                }
                car_color = index;
                if(car_type != -1) {
                    document.getElementById("car-img").src = connection[car_color][car_type];
                    document.getElementById("car-name").innerHTML = car_name[car_color][car_type];
                }
            }
            else        
             obj.className = obj.className.replace("btn-selected","btn-unselected");  
             car_color = -1;        
     }

 }
}
