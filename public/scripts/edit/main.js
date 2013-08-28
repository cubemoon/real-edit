define("common/templates/helpers",[],function(){return{}}),define("common/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("common/footer",e.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div id="footer"><p class="copyright">Copyright ⓒ<a class="corp">NHN Corp.</a>All Rights Reserved.</p></div>'})),this.JST}),define("common/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["common/alert"]=e.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var o,s="",a="function",u=this.escapeExpression;return s+='<div class="alert alert-',(o=n.type)?o=o.call(t,{hash:{},data:i}):(o=t.type,o=typeof o===a?o.apply(t):o),s+=u(o)+" ",(o=n.custClass)?o=o.call(t,{hash:{},data:i}):(o=t.custClass,o=typeof o===a?o.apply(t):o),s+=u(o)+' fade in" id="',(o=n.id)?o=o.call(t,{hash:{},data:i}):(o=t.id,o=typeof o===a?o.apply(t):o),s+=u(o)+'">\r\n	<button type="button" data-dismiss="alert" class="close">&times;</button>\r\n	<span>',(o=n.msg)?o=o.call(t,{hash:{},data:i}):(o=t.msg,o=typeof o===a?o.apply(t):o),s+=u(o)+"</span>\r\n</div>\r\n"}),this.JST}),define("common/templates/main",["handlebars","./helpers","common/partials_compiled","common/templates_compiled","lodash"],function(e,t,n,r,i){return i.each(t||[],function(t,n){e.registerHelper(n,t)}),r}),define("common/templates",["common/templates/main"],function(e){return e}),define("edit/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST.edit=e.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var o,s="",a="function",u=this.escapeExpression;return s+='<div id="header">\r\n	<span>Welcome: </span><span class="username">',(o=n.username)?o=o.call(t,{hash:{},data:i}):(o=t.username,o=typeof o===a?o.apply(t):o),s+=u(o)+'</span>\r\n	<span class="filename">',(o=n.filename)?o=o.call(t,{hash:{},data:i}):(o=t.filename,o=typeof o===a?o.apply(t):o),s+=u(o)+'</span>\r\n</div>\r\n\r\n<div>\r\n	<div class="sidebar">\r\n		<select id="progLang">\r\n			<option value="c">c</option>\r\n			<option value="cpp">c++</option>\r\n			<option value="javascript">javascript</option>\r\n		</select>\r\n\r\n		<h3>Online Users</h3>\r\n		<ul id="usersList">\r\n		</ul>\r\n\r\n		<h3>Messages</h3>\r\n		<ul id="msgList">\r\n		</ul>\r\n\r\n		<input id="message">\r\n	</div>\r\n	<div id="editor">\r\n	</div>\r\n</div>\r\n\r\n'}),this.JST}),define("edit/templates/main",["handlebars","common/templates","edit/templates_compiled","lodash"],function(e,t,n){return n}),define("edit/templates",["edit/templates/main"],function(e){return e}),define("edit/EditView",["lodash","backbone","edit/templates","jquery","common/utils"],function(e,t,n){var r=t.View.extend({tagName:"div",className:"container",id:"editPage",template:n.edit,events:{},initialize:function(){this.render()},render:function(){this.$el.html(this.template(this.model.toJSON()))}});return r}),define("edit/main",["./EditView","app","backbone","jquery"],function(e,t,n,r){return function(){function i(){window.editor=ace.edit(a.$el.find("#editor")[0]),editor.setTheme("ace/theme/monokai"),editor.getSession().setMode("ace/mode/javascript"),editor.focus(),editor.on("change",function(e){console.log(e)})}function o(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,document.body.appendChild(n),n.onload=t||function(){}}var s=new n.Model,a=new e({model:s});s.trigger("change"),r("#main").append(a.el),"undefined"==typeof ace?(console.log("undefined"),o("/ace-builds-1.1.01/src-noconflict/ace.js",function(){i()})):i(),t.views.push(a)}});
//@ sourceMappingURL=main.js.map