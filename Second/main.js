/**
 * Created by alex on 6/15/17.
 */

var routes = [['Madrid', 'Barcelona'], ['Barcelona', 'Gerona'],
             ['Gerona', 'Stockholm'], ['Stockholm', 'New York']];
var cities = {};
var in_edges = {};
for (var i in routes) {
    var route = routes[i];
    if (route[0] in cities) {
        cities[route[0]].push(route[1]);
    } else {
        cities[route[0]] = [route[1]];
        in_edges[route[0]] = 0;
    }
    if (!(route[1] in cities)) {
        cities[route[1]] = [];
        in_edges[route[1]] = 1;
    } else {
        in_edges[route[1]]++;
    }
}
var start_city;
for (var city in in_edges) {
    if (in_edges[city] == 0) {
        start_city = city;
    }
}
console.log(start_city);
while (cities[start_city].length != 0) {
    document.write("<p>From " + start_city + " ")
    start_city = cities[start_city].pop();
    document.writeln("To " + start_city + "<\p>");
}