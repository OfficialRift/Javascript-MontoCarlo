var points_total = 0;
var points_inside = 0;

for(var i = 0; i< 1000000; i++){
  points_total++;

  var x = Math.random();
  var y = Math.random();

  if(Math.pow(x, 2) + Math.pow(y, 2) <= 1){
    points_inside++;
  }
  console.log(" pi = " + (4 * points_inside / points_total));
}