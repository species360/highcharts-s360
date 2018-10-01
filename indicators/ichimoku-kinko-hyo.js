/*
  Highcharts JS v6.1.4-modified (2018-10-01)

 Indicator series type for Highstock

 (c) 2010-2017 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:"function"===typeof define&&define.amd?define(function(){return k}):k(Highcharts)})(function(k){(function(l){function k(a){return a.reduce(function(a,b){return Math.max(a,b[1])},-Infinity)}function A(a){return a.reduce(function(a,b){return Math.min(a,b[2])},Infinity)}function w(a){return{high:k(a),low:A(a)}}function B(a){var c,b,f,g,h;v(a.series,function(a){if(a.xData)for(g=a.xData,h=b=a.xIncrement?1:g.length-1;0<h;h--)if(f=g[h]-
g[h-1],c===u||f<c)c=f});return c}var u,C=l.seriesType,v=l.each,x=l.merge,y=l.color,D=l.isArray,z=l.defined,p=l.seriesTypes.sma;l.approximations["ichimoku-averages"]=function(){var a=[],c;v(arguments,function(b,f){a.push(l.approximations.average(b));c=!c&&void 0===a[f]});return c?void 0:a};C("ikh","sma",{params:{period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTENKAN SEN: {point.tenkanSen:.3f}\x3cbr/\x3eKIJUN SEN: {point.kijunSen:.3f}\x3cbr/\x3eCHIKOU SPAN: {point.chikouSpan:.3f}\x3cbr/\x3eSENKOU SPAN A: {point.senkouSpanA:.3f}\x3cbr/\x3eSENKOU SPAN B: {point.senkouSpanB:.3f}\x3cbr/\x3e'},
tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"ichimoku-averages"}},{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",nameComponents:["periodSenkouSpanB","period",
"periodTenkan"],init:function(){p.prototype.init.apply(this,arguments);this.options=x({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},senkouSpanA:{styles:{lineColor:this.color,fill:y(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:y(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:y(this.color).setOpacity(.2).get()}}},this.options)},toYData:function(a){return[a.tenkanSen,a.kijunSen,
a.chikouSpan,a.senkouSpanA,a.senkouSpanB]},translate:function(){var a=this;p.prototype.translate.apply(a);v(a.points,function(c){v(a.pointArrayMap,function(b){z(c[b])&&(c["plot"+b]=a.yAxis.toPixels(c[b],!0),c.plotY=c["plot"+b],c.tooltipPos=[c.plotX,c["plot"+b]],c.isNull=!1)})})},drawGraph:function(){for(var a=this,c=a.points,b=c.length,f=a.options,g=a.graph,h=a.color,l={options:{gapSize:f.gapSize}},e=a.pointArrayMap.length,n=[[],[],[],[],[],[]],q,r,m;b--;)for(r=c[b],m=0;m<e;m++)q=a.pointArrayMap[m],
z(r[q])&&n[m].push({plotX:r.plotX,plotY:r["plot"+q],isNull:!1});v("tenkanLine kijunLine chikouLine senkouSpanA senkouSpanB senkouSpan".split(" "),function(b,c){a.points=n[c];a.options=x(f[b].styles,l);a.graph=a["graph"+b];a.nextPoints=n[c-1];5===c?(a.points=n[c-1],a.options=x(f[b].styles,l),a.graph=a["graph"+b],a.nextPoints=n[c-2],a.fillGraph=!0,a.color=a.options.fill):(a.fillGraph=!1,a.color=h);p.prototype.drawGraph.call(a);a["graph"+b]=a.graph});delete a.nextPoints;delete a.fillGraph;a.points=c;
a.options=f;a.graph=g},getGraphPath:function(a){var c,b,f=[];a=a||this.points;if(this.fillGraph&&this.nextPoints){b=p.prototype.getGraphPath.call(this,this.nextPoints);b[0]="L";c=p.prototype.getGraphPath.call(this,a);b=b.slice(0,c.length);for(var g=b.length-1;0<g;g-=3)f.push(b[g-2],b[g-1],b[g]);c=c.concat(f)}else c=p.prototype.getGraphPath.apply(this,arguments);return c},getValues:function(a,c){var b=c.period,f=c.periodTenkan;c=c.periodSenkouSpanB;var g=a.xData,h=a.yData,l=h&&h.length||0;a=B(a.xAxis);
var e=[],n=[],q,r,m,t,k,d,p;if(g.length<=b||!D(h[0])||4!==h[0].length)return!1;q=g[0]-b*a;for(d=0;d<b;d++)n.push(q+d*a);for(d=0;d<l;d++)d>=f&&(m=h.slice(d-f,d),m=w(m),m=(m.high+m.low)/2),d>=b&&(t=h.slice(d-b,d),t=w(t),t=(t.high+t.low)/2,p=(m+t)/2),d>=c&&(k=h.slice(d-c,d),k=w(k),k=(k.high+k.low)/2),q=h[d][0],r=g[d],e[d]===u&&(e[d]=[]),e[d+b]===u&&(e[d+b]=[]),e[d+b][0]=m,e[d+b][1]=t,e[d+b][2]=u,d>=b?e[d-b][2]=q:(e[d+b][3]=u,e[d+b][4]=u),e[d+2*b]===u&&(e[d+2*b]=[]),e[d+2*b][3]=p,e[d+2*b][4]=k,n.push(r);
for(d=1;d<=b;d++)n.push(r+d*a);return{values:e,xData:n,yData:e}}})})(k)});
//# sourceMappingURL=ichimoku-kinko-hyo.js.map
