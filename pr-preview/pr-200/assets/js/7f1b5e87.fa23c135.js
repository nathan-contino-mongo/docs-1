"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83160:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"3 - Navigation"},s=void 0,c={unversionedId:"tutorials/jetpack-compose/navigation",id:"tutorials/jetpack-compose/navigation",isDocsHomePage:!1,title:"3 - Navigation",description:"3-1 Creating a Root Navigation",source:"@site/docs/tutorials/jetpack-compose/3-navigation.md",sourceDirName:"tutorials/jetpack-compose",slug:"/tutorials/jetpack-compose/navigation",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/navigation",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/jetpack-compose/3-navigation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Navigation"},sidebar:"tutorialSidebar",previous:{title:"2 - Configure Ditto",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/configure-ditto"},next:{title:"4 - Showing the List of Tasks",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/tasks-list-screen"}},p=[{value:"3-1 Creating a Root Navigation",id:"3-1-creating-a-root-navigation",children:[],level:2},{value:"3-2 Setting the <code>MainAcivity</code> to render <code>Root</code>",id:"3-2-setting-the-mainacivity-to-render-root",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"3-1-creating-a-root-navigation"},"3-1 Creating a Root Navigation"),(0,o.kt)("p",null,"This application will have two ",(0,o.kt)("em",{parentName:"p"},"Screens")," which are just Jetpack Compose views."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen.kt")," - A list where we can show the tasks."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen.kt")," - Where we can edit, create, and delete the Task")),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("strong",{parentName:"p"},"Root.kt")," file and add a Navigation Controller and a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavHost")," to the Root of our application."),(0,o.kt)("p",null,"You'll notice references to ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen"),", don't worry we will add them there."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Root")," of our application hosts a ",(0,o.kt)("inlineCode",{parentName:"p"},"navController")," which we use to switch between each Screen. There are ",(0,o.kt)("strong",{parentName:"p"},"3")," routes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"tasks")," which will bring you the ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"tasks/edit")," which will bring you the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen")," but will be for ",(0,o.kt)("strong",{parentName:"li"},"creating")," tasks. Notice that we will give a ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId"),'. This same screen will be in a "create" mode if the ',(0,o.kt)("inlineCode",{parentName:"li"},"taskId")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"tasks/edit/{taskId}")," which will bring you the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen")," but will be for ",(0,o.kt)("strong",{parentName:"li"},"editing")," tasks. Notice that there is a ",(0,o.kt)("inlineCode",{parentName:"li"},'"{taskId}"')," portion to this route. Similar to web apps, we will parse out a ",(0,o.kt)("inlineCode",{parentName:"li"},"Task._id")," string from the route and use that for editing.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Root.kt"',title:'"Root.kt"'},'\n@Composable\nfun Root() {\n    val navController = rememberNavController()\n\n    // A surface container using the \'background\' color from the theme\n    Surface(color = R.colors.white) {\n        NavHost(navController = navController, startDestination = "tasks") {\n            composable("tasks") { TasksListScreen(navController = navController) }\n            composable("tasks/edit") {\n                EditScreen(navController = navController, taskId = null)\n            }\n            composable("tasks/edit/{taskId}") { backStackEntry ->\n                val taskId: String? = backStackEntry.arguments?.getString("taskId")\n                EditScreen(navController = navController, taskId = taskId)\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"3-2-setting-the-mainacivity-to-render-root"},"3-2 Setting the ",(0,o.kt)("inlineCode",{parentName:"h2"},"MainAcivity")," to render ",(0,o.kt)("inlineCode",{parentName:"h2"},"Root")),(0,o.kt)("p",null,"Now back in the ",(0,o.kt)("strong",{parentName:"p"},"MainAcivity.kt")," file look for ",(0,o.kt)("inlineCode",{parentName:"p"},"setContent{ }")," and replace it completely with the following highlighted lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n\n        val ditto = TasksApplication.ditto\n        try {\n            ditto!!.tryStartSync()\n        } catch (e: DittoError) {\n            Toast.makeText(\n                this@MainActivity,\n                """\n                    Uh oh! There was an error trying to start Ditto\'s sync feature.\n                    That\'s okay, it will still work as a local database.\n                    This is the error: ${e.localizedMessage}\n                """.trimIndent(), Toast.LENGTH_LONG\n            ).show()\n        }\n\n        // highlight-start\n        setContent {\n            Root()\n        }\n        // highlight-end\n    }\n}\n')))}u.isMDXComponent=!0}}]);