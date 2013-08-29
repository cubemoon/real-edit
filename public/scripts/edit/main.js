define("common/templates/helpers",["lodash"],function(e){return{select:function(t,n){var r=e.keys(n.hash).map(function(e){return e+'="'+n.hash[e]+'"'}).join(" "),o="<select "+r+">",i=n.fn(this).replace(/value\s*=\s*("|')?([^><\b]*)\1/g,function(e,n,r){return r==t?e+" selected":e});return o+=i,o+="</select>"}}}),define("common/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("common/footer",e.template(function(e,t,n,r,o){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{},'<div id="footer"><p class="copyright">Copyright ⓒ<a class="corp">NHN Corp.</a>All Rights Reserved.</p></div>'})),e.registerPartial("common/keybindings",e.template(function(e,t,n,r,o){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{},'<option value="">Ace</option>\r\n<option value="vim">Vim</option>\r\n<option value="emacs">Emacs</option>\r\n'})),e.registerPartial("common/languages",e.template(function(e,t,n,r,o){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{},'<option value="abap">ABAP</option>\r\n<option value="ada">ADA</option>\r\n<option value="actionscript">ActionScript</option>\r\n<option value="asciidoc">AsciiDoc</option>\r\n<option value="assembly_x86">Assembly_x86</option>\r\n<option value="autohotkey">AutoHotKey</option>\r\n<option value="batchfile">BatchFile</option>\r\n<option value="c9search">C9Search</option>\r\n<option value="c_cpp">C/C++</option>\r\n<option value="clojure">Clojure</option>\r\n<option value="cobol">Cobol</option>\r\n<option value="coffee">CoffeeScript</option>\r\n<option value="coldfusion">ColdFusion</option>\r\n<option value="csharp">C#</option>\r\n<option value="css">CSS</option>\r\n<option value="curly">Curly</option>\r\n<option value="d">D</option>\r\n<option value="dart">Dart</option>\r\n<option value="diff">Diff</option>\r\n<option value="dot">Dot</option>\r\n<option value="erlang">Erlang</option>\r\n<option value="ejs">EJS</option>\r\n<option value="forth">Forth</option>\r\n<option value="ftl">FreeMarker</option>\r\n<option value="glsl">Glsl</option>\r\n<option value="golang">Go</option>\r\n<option value="groovy">Groovy</option>\r\n<option value="haml">HAML</option>\r\n<option value="haskell">Haskell</option>\r\n<option value="haxe">haXe</option>\r\n<option value="html">HTML</option>\r\n<option value="html_ruby">HTML (Ruby)</option>\r\n<option value="ini">Ini</option>\r\n<option value="jade">Jade</option>\r\n<option value="java">Java</option>\r\n<option value="javascript">JavaScript</option>\r\n<option value="json">JSON</option>\r\n<option value="jsoniq">JSONiq</option>\r\n<option value="jsp">JSP</option>\r\n<option value="jsx">JSX</option>\r\n<option value="julia">Julia</option>\r\n<option value="latex">LaTeX</option>\r\n<option value="less">LESS</option>\r\n<option value="liquid">Liquid</option>\r\n<option value="lisp">Lisp</option>\r\n<option value="livescript">LiveScript</option>\r\n<option value="logiql">LogiQL</option>\r\n<option value="lsl">LSL</option>\r\n<option value="lua">Lua</option>\r\n<option value="luapage">LuaPage</option>\r\n<option value="lucene">Lucene</option>\r\n<option value="makefile">Makefile</option>\r\n<option value="matlab">MATLAB</option>\r\n<option value="markdown">Markdown</option>\r\n<option value="mysql">MySQL</option>\r\n<option value="mushcode">MUSHCode</option>\r\n<option value="objectivec">Objective-C</option>\r\n<option value="ocaml">OCaml</option>\r\n<option value="pascal">Pascal</option>\r\n<option value="perl">Perl</option>\r\n<option value="pgsql">pgSQL</option>\r\n<option value="php">PHP</option>\r\n<option value="powershell">Powershell</option>\r\n<option value="prolog">Prolog</option>\r\n<option value="properties">Properties</option>\r\n<option value="python">Python</option>\r\n<option value="r">R</option>\r\n<option value="rdoc">RDoc</option>\r\n<option value="rhtml">RHTML</option>\r\n<option value="ruby">Ruby</option>\r\n<option value="rust">Rust</option>\r\n<option value="sass">SASS</option>\r\n<option value="scad">SCAD</option>\r\n<option value="scala">Scala</option>\r\n<option value="scheme">Scheme</option>\r\n<option value="scss">SCSS</option>\r\n<option value="sh">SH</option>\r\n<option value="snippets">snippets</option>\r\n<option value="sql">SQL</option>\r\n<option value="stylus">Stylus</option>\r\n<option value="svg">SVG</option>\r\n<option value="tcl">Tcl</option>\r\n<option value="tex">Tex</option>\r\n<option value="text">Text</option>\r\n<option value="textile">Textile</option>\r\n<option value="toml">Toml</option>\r\n<option value="twig">Twig</option>\r\n<option value="typescript">Typescript</option>\r\n<option value="vbscript">VBScript</option>\r\n<option value="velocity">Velocity</option>\r\n<option value="xml">XML</option>\r\n<option value="xquery">XQuery</option>\r\n<option value="yaml">YAML</option>\r\n'})),e.registerPartial("common/themes",e.template(function(e,t,n,r,o){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{},'<optgroup label="Bright">\r\n    <option value="ace/theme/chrome">Chrome</option>\r\n    <option value="ace/theme/clouds">Clouds</option>\r\n    <option value="ace/theme/crimson_editor">Crimson Editor</option>\r\n    <option value="ace/theme/dawn">Dawn</option>\r\n    <option value="ace/theme/dreamweaver">Dreamweaver</option>\r\n    <option value="ace/theme/eclipse">Eclipse</option>\r\n    <option value="ace/theme/github">GitHub</option>\r\n    <option value="ace/theme/solarized_light">Solarized Light</option>\r\n    <option value="ace/theme/textmate" selected="selected">TextMate</option>\r\n    <option value="ace/theme/tomorrow">Tomorrow</option>\r\n    <option value="ace/theme/xcode">XCode</option>\r\n</optgroup>\r\n<optgroup label="Dark">\r\n    <option value="ace/theme/ambiance">Ambiance</option>\r\n    <option value="ace/theme/chaos">Chaos</option>\r\n    <option value="ace/theme/clouds_midnight">Clouds Midnight</option>\r\n    <option value="ace/theme/cobalt">Cobalt</option>\r\n    <option value="ace/theme/idle_fingers">idleFingers</option>\r\n    <option value="ace/theme/kr_theme">krTheme</option>\r\n    <option value="ace/theme/merbivore">Merbivore</option>\r\n    <option value="ace/theme/merbivore_soft">Merbivore Soft</option>\r\n    <option value="ace/theme/mono_industrial">Mono Industrial</option>\r\n    <option value="ace/theme/monokai">Monokai</option>\r\n    <option value="ace/theme/pastel_on_dark">Pastel on dark</option>\r\n    <option value="ace/theme/solarized_dark">Solarized Dark</option>\r\n    <option value="ace/theme/terminal">Terminal</option>\r\n    <option value="ace/theme/tomorrow_night">Tomorrow Night</option>\r\n    <option value="ace/theme/tomorrow_night_blue">Tomorrow Night Blue</option>\r\n    <option value="ace/theme/tomorrow_night_bright">Tomorrow Night Bright</option>\r\n    <option value="ace/theme/tomorrow_night_eighties">Tomorrow Night 80s</option>\r\n    <option value="ace/theme/twilight">Twilight</option>    \r\n    <option value="ace/theme/vibrant_ink">Vibrant Ink</option>\r\n</optgroup>\r\n'})),this.JST}),define("common/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["common/alert"]=e.template(function(e,t,n,r,o){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{};var i,a="",s="function",u=this.escapeExpression;return a+='<div class="alert alert-',(i=n.type)?i=i.call(t,{hash:{},data:o}):(i=t.type,i=typeof i===s?i.apply(t):i),a+=u(i)+" ",(i=n.custClass)?i=i.call(t,{hash:{},data:o}):(i=t.custClass,i=typeof i===s?i.apply(t):i),a+=u(i)+' fade in" id="',(i=n.id)?i=i.call(t,{hash:{},data:o}):(i=t.id,i=typeof i===s?i.apply(t):i),a+=u(i)+'">\r\n	<button type="button" data-dismiss="alert" class="close">&times;</button>\r\n	<span>',(i=n.msg)?i=i.call(t,{hash:{},data:o}):(i=t.msg,i=typeof i===s?i.apply(t):i),a+=u(i)+"</span>\r\n</div>\r\n"}),this.JST["common/modal"]=e.template(function(e,t,n,r,o){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{};var i,a="",s="function",u=this.escapeExpression;return a+='  <!-- Modal -->\r\n<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n        <h4 class="modal-title">',(i=n.title)?i=i.call(t,{hash:{},data:o}):(i=t.title,i=typeof i===s?i.apply(t):i),a+=u(i)+'</h4>\r\n      </div>\r\n      <div class="modal-body">\r\n        ',(i=n.body)?i=i.call(t,{hash:{},data:o}):(i=t.body,i=typeof i===s?i.apply(t):i),(i||0===i)&&(a+=i),a+='\r\n      </div>\r\n      <div class="modal-footer">\r\n        ',(i=n.footer)?i=i.call(t,{hash:{},data:o}):(i=t.footer,i=typeof i===s?i.apply(t):i),(i||0===i)&&(a+=i),a+="\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"}),this.JST}),define("common/templates/main",["handlebars","./helpers","common/partials_compiled","common/templates_compiled","lodash"],function(e,t,n,r,o){return o.each(t||[],function(t,n){e.registerHelper(n,t)}),r}),define("common/templates",["common/templates/main"],function(e){return e}),define("edit/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST.edit=e.template(function(e,t,n,r,o){function i(e,t){var o,i="";return i+="\r\n					",o=h.invokePartial(r["common/languages"],"common/languages",e,n,r,t),(o||0===o)&&(i+=o),i+="\r\n				"}function a(e,t){var o,i="";return i+="\r\n					",o=h.invokePartial(r["common/keybindings"],"common/keybindings",e,n,r,t),(o||0===o)&&(i+=o),i+="\r\n				"}function s(e,t){var o,i="";return i+="\r\n					",o=h.invokePartial(r["common/themes"],"common/themes",e,n,r,t),(o||0===o)&&(i+=o),i+="\r\n				"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=this.merge(r,e.partials),o=o||{};var u,c,l,p="",h=this,f="function",d=this.escapeExpression,m=n.helperMissing;return p+='<div id="header" class="navbar navbar-inverse navbar-fixed-top edit-header" role="banner">\r\n	<div class="container">\r\n		<div class="navbar-header">\r\n			<a class="navbar-brand" href="#">RealEdit</a>\r\n		</div>\r\n		<div class="collapse navbar-collapse navbar-ex2-collapse">\r\n			<button type="button" class="btn btn-default navbar-btn btn-xs">New</button>\r\n			<button type="button" class="btn btn-default btn-xs">History</button>\r\n			<button type="button" class="btn btn-default btn-xs">Download</button>\r\n			<div class="user-info pull-right">\r\n				<a href="#" id="userName">',(u=n.user)?u=u.call(t,{hash:{},data:o}):(u=t.user,u=typeof u===f?u.apply(t):u),p+=d(u)+'</a>\r\n			</div>\r\n\r\n			<div class="pro-lang pull-right">\r\n				<span>Languages</span>\r\n				',l={hash:{id:"progLang"},inverse:h.noop,fn:h.program(1,i,o),data:o},u=n.select||t.select,c=u?u.call(t,t.language,l):m.call(t,"select",t.language,l),(c||0===c)&&(p+=c),p+='\r\n			</div>\r\n\r\n			<div class="key-binding pull-right">\r\n				<span>Key Binding</span>\r\n				',l={hash:{id:"keyBinding"},inverse:h.noop,fn:h.program(3,a,o),data:o},u=n.select||t.select,c=u?u.call(t,t.keybindi,l):m.call(t,"select",t.keybindi,l),(c||0===c)&&(p+=c),p+='\r\n			</div>\r\n\r\n			<div class="editor-theme pull-right">\r\n				<span>Theme</span>\r\n				',l={hash:{id:"editorTheme"},inverse:h.noop,fn:h.program(5,s,o),data:o},u=n.select||t.select,c=u?u.call(t,t.theme,l):m.call(t,"select",t.theme,l),(c||0===c)&&(p+=c),p+='\r\n			</div>\r\n        </div>\r\n\r\n		\r\n	</div>\r\n</div>\r\n\r\n<div id="editCon" class="container">\r\n	<div class="clearfix row" style="position:relative">\r\n		<div class="sidebar col-xs-3">\r\n			<div class="user-list panel panel-default">\r\n				<div class="panel-heading">\r\n					Users\r\n				</div>\r\n				<div class="panel-body">\r\n					<ul id="usersList">\r\n					</ul>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="messages panel panel-default">\r\n				<div class="panel-heading">\r\n					Messages\r\n				</div>\r\n				<div class="panel-body">\r\n					<ul id="msgList">\r\n					</ul>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="chat-con panel panel-default">\r\n				<div class="panel-heading">\r\n					Chat\r\n				</div>\r\n				<div class="panel-body">\r\n					<input id="message" type="text" class="form-control">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div id="editor" class="col-xs-9"></div>\r\n	</div>\r\n</div>\r\n'}),this.JST["edit/message"]=e.template(function(e,t,n,r,o){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{};var i,a="",s="function",u=this.escapeExpression;return a+="<li>\n	<span>",(i=n.user)?i=i.call(t,{hash:{},data:o}):(i=t.user,i=typeof i===s?i.apply(t):i),a+=u(i)+":</span>\n	<br>\n	<span>",(i=n.msg)?i=i.call(t,{hash:{},data:o}):(i=t.msg,i=typeof i===s?i.apply(t):i),a+=u(i)+"</span>\n</li>\n"}),this.JST["edit/users"]=e.template(function(e,t,n,r,o){function i(e){var t="";return t+="\n	<li>"+c(typeof e===u?e.apply(e):e)+"<li>\n"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=o||{};var a,s="",u="function",c=this.escapeExpression,l=this;return a=n.each.call(t,t.users,{hash:{},inverse:l.noop,fn:l.program(1,i,o),data:o}),(a||0===a)&&(s+=a),s+="\n"}),this.JST}),define("edit/templates/main",["handlebars","common/templates","edit/templates_compiled","lodash"],function(e,t,n){return n}),define("edit/templates",["edit/templates/main"],function(e){return e}),define("common/ModalView",["backbone","common/templates"],function(e,t){var n=e.View.extend({template:t["common/modal"],initialize:function(e){this.title=e.title,this.body=e.body,this.footer=e.footer,this.render()},render:function(){this.$el.html(this.template({title:this.title,body:this.body,footer:this.footer})),$(document.body).append(this.$el),this.$(".modal").modal()}});return n}),define("common/PromptView",["common/ModalView"],function(e){var t=e.extend({events:{"click .btn-ok":"ok","click .btn-close":"cancel"},initialize:function(e){this.title=e.title||"",this.body=(e.prompt||"")+'<br><br><input type="text" class="prompt-input">',this.footer='<button type="button" class="btn btn-close btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-ok btn-primary" data-dismiss="modal">OK</button>',this.render(),this.$(".prompt-input").focus()},ok:function(){this.options.callback&&this.options.callback(this.$(".prompt-input").val())},cancel:function(){this.options.callback&&this.options.callback(null)}});return t}),define("edit/EditView",["lodash","backbone","edit/templates","jquery","common/utils","common/PromptView"],function(e,t,n,r,o,i){var a=t.View.extend({tagName:"div",id:"editPage",template:n.edit,events:{"click #userName":"changeUserName","change #keyBinding":"changeKeyBinding","change #progLang":"changeProgrammingLanguage","change #editorTheme":"changeEditorTheme","keydown #message":"chat"},initialize:function(t){this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"change:user",this.updateUserInfo),this.listenTo(this.model,"change:language",this.updateEditorStatus),this.listenTo(this.model,"change:keybindi",this.updateEditorStatus),this.listenTo(this.model,"change:theme",this.updateEditorStatus),this.fileName=t.fileName,this.socket=io.connect("/"),this.socket.on("connect",e.bind(this.onSocketConnect,this)),this.socket.on("user:change",e.bind(this.onUserChange,this)),this.socket.on("newmsg",e.bind(this.onNewMessage,this))},render:function(e){if(!this.rendered){this.$el.html(this.template(this.model.toJSON()));var t=this;"undefined"==typeof ace?o.loadScript("/ace-builds-1.1.01/src-min-noconflict/ace.js",function(){t.initEditor()}):t.initEditor(),e.get("user")||(this.$("#userName").html("unknown"),this.changeUserName()),this.rendered=!0}},initEditor:function(){window.aceEditor=this.editor=ace.edit(this.$("#editor")[0]),this.$("#editor").height(r(".sidebar").height()),this.updateEditorStatus(),this.editor.focus(),o.loadScript("/ace-builds-1.1.01/src-min-noconflict/keybinding-emacs.js",function(){}),o.loadScript("/ace-builds-1.1.01/src-min-noconflict/keybinding-vim.js",function(){})},updateEditorStatus:function(){if(this.editor){this.editor.setTheme(this.model.get("theme")),this.editor.getSession().setMode("ace/mode/"+this.model.get("language"));var e=this.model.get("keybindi");this.editor.setKeyboardHandler(e?"ace/keyboard/"+e:null)}},updateUserInfo:function(){this.$("#userName").html(this.model.get("user")||"unknown")},changeUserName:function(){var e=this;new i({title:"RealEdit",prompt:"Please enter your user name:",callback:function(t){var n=e.$("#userName").html();e.model.set("user",t||n||""),t&&(localStorage.realEditUser=t)}})},changeKeyBinding:function(){var e=localStorage.realEditKeyBindi=this.$("#keyBinding").val();this.model.set("keybindi",e)},changeProgrammingLanguage:function(){var e=localStorage.realEditProgLang=this.$("#progLang").val();this.model.set("language",e)},changeEditorTheme:function(){var e=localStorage.realEditTheme=this.$("#editorTheme").val();this.model.set("theme",e)},chat:function(e){if(13==e.which){var t=r.trim(this.$("#message").val());this.socket.emit("chat",{chanel:this.fileName,msg:t,user:this.model.get("user")||"unknown"}),this.$("#message").val("")}},onSocketConnect:function(){this.socket.emit("begin",{chanel:this.fileName,user:this.model.get("user")||"unknown"})},onNewMessage:function(e){this.$("#msgList").append(n["edit/message"](e))},onUserChange:function(e){this.$("#usersList").html(n["edit/users"]({users:e}))}});return a}),define("edit/main",["./EditView","app","backbone","jquery","common/utils","common/PromptView","socket.io"],function(e,t,n,r){return function(o,i,a,s){var u=new n.Model,c=new e({model:u,fileName:s});t.views.push(c),r("#main").append(c.el),u.set({user:localStorage.realEditUser||"",language:localStorage.realEditProgLang||"javascript",keybindi:localStorage.realEditKeyBindi||"",theme:localStorage.realEditTheme||"textmate"})}});
//@ sourceMappingURL=main.js.map