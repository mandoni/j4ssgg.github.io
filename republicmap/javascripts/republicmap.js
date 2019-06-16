/*
	Create new RegionMap object.
	@param {svgId} SVG - Id of SVG container.
	@callback hoverCallback - The function to execute when the mouse pointer is over any region of RegionMap
	@callback clickCallback - The function to execute when the mouse pointer clicked any region of RegionMap.
	@param {Object []} colorDictionary - The colors for every region in RegionMap
	@param {string} colorDictionary [].base - The initial color for the region .
	@param {string} colorDictionary [].hover - The color for the region when mouse pointer is over it
	@param {string} colorDictionary [].clicked - The colors for the region when mouse pointer clicked it.
*/

let baseColor = "#B1C9FF";
let hoverColor = "#72A3EE";
let svgId = "#svgMap";
let svgSubItems = 22;
let insideRegion = false;

RegionMap = function () {

    // Insert SVG content into SVG container
    $ (svgId).html (mapDom);
	svgSubItems = 22;
	insideRegion = false;
    // Set handlers and colors for every region (polygon)
	for (var idx = 0; idx <= svgSubItems; idx++) 
	{
        registerMapHandlers (idx);
    }
}

LoadNewRegion = function (which) {

    // Insert SVG content into SVG container
	$ (svgId).html (regionId(which));
	svgSubItems = regionSubItems(which);
	insideRegion = true;


    // Set handlers and colors for every region (polygon)
	for (var idx = 0; idx <= svgSubItems; idx++) 
	{
        registerMapHandlers (idx);
    }
}

/*
	Function to execute for when mouse pointer enters any region (polygon) of RepulicMap.
*/
enterPolygon = function (which) 
{   
	// Retrive objects
	paintRegion(which, hoverColor);
   	// Run Callback
	console.log("Hover on " + which);
}


leavePolygon = function (which) 
{   
	// Retrive objects
	paintRegion(which, baseColor);
	
   	// Run Callback
	console.log("Leave out " + which);
}

/*
	Function to execute for when mouse pointer clicks any region (polygon) of RepulicMap.
*/
clickPolygon = function (which) 
{
  	// Run Callback
	("Click on " + which);

	if(!insideRegion){
		LoadNewRegion(which);
	}
}

/*
	Set handlers for every region (polygon) in RegionMap
	@param {Object} map - RegionMap object.
	@param {number} which - Region id of 'map' to which register handlers.
 */
function registerMapHandlers (which) {
	$ ('#' + which).mouseenter (function () 
	{
        enterPolygon (which);
	});
	$ ('#' + which).mouseleave (function () 
	{
        leavePolygon (which);
    });
	$ ('#' + which).click (function () 
	{
        clickPolygon (which);
    });
}



paintRegion = function(which, color){
	$ ('#' + which).css({fill : color, transition : "0.3s"});
}

regionId = function(which) {
	return guatemalaDom;
}

regionSubItems = function(which){
	return 21;
}