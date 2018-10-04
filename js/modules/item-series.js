/*
  Highcharts JS v6.1.1 (2018-10-04)

 Item series type for Highcharts

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?module.exports=b:"function"===typeof define&&define.amd?define(function(){return b}):b(Highcharts)})(function(b){(function(b){var h=b.each,q=b.extend,r=b.pick,k=b.seriesType;k("item","column",{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}},{drawPoints:function(){var c=this,p=c.chart.renderer,k=this.options.marker;h(this.points,function(a){var g,l,d,e,m,h=(a.marker||{}).symbol||k.symbol,f,n;a.graphics=d=a.graphics||{};m=a.pointAttr?
a.pointAttr[a.selected?"selected":""]||c.pointAttr[""]:c.pointAttribs(a,a.selected&&"select");delete m.r;if(null!==a.y)for(a.graphic||(a.graphic=p.g("point").add(c.group)),e=a.y,n=r(a.stackY,a.y),f=Math.min(a.pointWidth,c.yAxis.transA*(1-c.options.itemPadding)),g=n;g>n-a.y;g--)l={x:a.barX+a.pointWidth/2-f/2,y:c.yAxis.toPixels(g,!0)-f/2,width:f,height:f},d[e]?d[e].animate(l):d[e]=p.symbol(h).attr(q(l,m)).add(a.graphic),d[e].isActive=!0,e--;b.objectEach(d,function(a,b){a.isActive?a.isActive=!1:(a.destroy(),
delete a[b])})})}})})(b)});
