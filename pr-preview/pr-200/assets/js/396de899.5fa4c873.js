"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8560],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96766:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"2 - Configure Ditto"},l=void 0,p={unversionedId:"tutorials/jetpack-compose/configure-ditto",id:"tutorials/jetpack-compose/configure-ditto",isDocsHomePage:!1,title:"2 - Configure Ditto",description:"2-1 Create Your Ditto App",source:"@site/docs/tutorials/jetpack-compose/2-configure-ditto.md",sourceDirName:"tutorials/jetpack-compose",slug:"/tutorials/jetpack-compose/configure-ditto",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/configure-ditto",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/jetpack-compose/2-configure-ditto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configure Ditto"},sidebar:"tutorialSidebar",previous:{title:"1 - Setup",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/setup"},next:{title:"3 - Navigation",permalink:"/pr-preview/pr-200/tutorials/jetpack-compose/navigation"}},d=[{value:"2-1 Create Your Ditto App",id:"2-1-create-your-ditto-app",children:[],level:2},{value:"2-2 Create Application Class",id:"2-2-create-application-class",children:[],level:2},{value:"2-3 Add Permissions and Register Class",id:"2-3-add-permissions-and-register-class",children:[],level:2},{value:"2-4 Start Ditto Sync",id:"2-4-start-ditto-sync",children:[],level:2},{value:"2-5 Create a Task data class",id:"2-5-create-a-task-data-class",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"2-1-create-your-ditto-app"},"2-1 Create Your Ditto App"),(0,o.kt)("p",null,"Before we start coding, we first need to create a new app in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,o.kt)("p",null,"Each app created on the portal has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,o.kt)("h2",{id:"2-2-create-application-class"},"2-2 Create Application Class"),(0,o.kt)("p",null,"Typically, applications with Ditto will need to run Ditto as a singleton. To construct Ditto it'll need access to a live Android ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),". Since the Application class is a singleton and has the necessary ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),", we can create a subclass called ",(0,o.kt)("strong",{parentName:"p"},"TasksApplication.kt")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"companion object")," and declare ",(0,o.kt)("inlineCode",{parentName:"li"},"var ditto: Ditto? = null"),". This will create a static variable that we can always access throughout our entire application."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"override fun onCreate()"),", construct ditto with ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultAndroidDittoDependencies")," see below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TasksApplication.kt"',title:'"TasksApplication.kt"'},'import android.app.Application\nimport live.ditto.Ditto\nimport live.ditto.DittoIdentity\nimport live.ditto.android.DefaultAndroidDittoDependencies\n\n\nclass TasksApplication: Application() {\n\n    companion object {\n        var ditto: Ditto? = null;\n    }\n\n    override fun onCreate() {\n        super.onCreate()\n        // construct a DefaultAndroidDittoDependencies object with the applicationContext\n        val androidDependencies = DefaultAndroidDittoDependencies(applicationContext)\n        // for this example we will use a Development identity\n        val identity = DittoIdentity.OnlinePlaygroundV2(\n            appID = "REPLACE_ME", \n            dependencies = androidDependencies, \n            token = "REPLACE_ME")\n        ditto = Ditto(androidDependencies, identity)\n    }\n\n}\n')),(0,o.kt)("p",null,"Now you will be able to access this Ditto anywhere in your application like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docs = TasksApplication.ditto!!.store["tasks].findAll().exec()\n')),(0,o.kt)("h2",{id:"2-3-add-permissions-and-register-class"},"2-3 Add Permissions and Register Class"),(0,o.kt)("p",null,"In order for Ditto to sync, we will need to add permissions to the ",(0,o.kt)("strong",{parentName:"p"},"AndroidManifest.xml")," file. ",(0,o.kt)("a",{parentName:"p",href:"/installation/android#android-platform-permissions"},"For more information about these permissions, click here"),". In addition we will need to register our custom ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksApplication")," as the main Application class in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<application>")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="AndroidManifest.xml" {5-15,18}',title:'"AndroidManifest.xml"',"{5-15,18}":!0},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="live.ditto.compose.tasks">\n\n    <uses-permission android:name="android.permission.BLUETOOTH"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.BLUETOOTH_SCAN"\n        android:usesPermissionFlags="neverForLocation" />\n    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />\n    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />\n    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"\n        android:maxSdkVersion="30" />\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />\n    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />\n\n\n    <application\n        android:name=".TasksApplication"\n        android:icon="@mipmap/ic_launcher"\n        android:label="@string/app_name"\n        ... more\n        />\n\n')),(0,o.kt)("h2",{id:"2-4-start-ditto-sync"},"2-4 Start Ditto Sync"),(0,o.kt)("p",null,"When Android studio created the project, it should have created a file called ",(0,o.kt)("strong",{parentName:"p"},"MainActivity.kt"),". In this file, we will take the singleton ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksApplication.ditto!!")," and begin to start the sync process with ",(0,o.kt)("inlineCode",{parentName:"p"},"tryStartSync()")),(0,o.kt)("p",null,"The app will show a ",(0,o.kt)("inlineCode",{parentName:"p"},"Toast")," error if ",(0,o.kt)("inlineCode",{parentName:"p"},"tryStartSync")," encounters a mistake. Don't worry if an error occurs or if you omit this step, Ditto will continue to work as a local database. However, it's advised that you fix the errors to see the app sync across multiple devices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity" {5-18}',title:'"MainActivity"',"{5-18}":!0},'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n      super.onCreate(savedInstanceState)\n\n      val ditto = TasksApplication.ditto\n      try {\n          ditto!!.tryStartSync()\n      } catch (e: DittoError) {\n          // 2.\n          Toast.makeText(\n              this@MainActivity,\n              """\n                  Uh oh! There was an error trying to start Ditto\'s sync feature.\n                  That\'s okay, it will still work as a local database.\n                  This is the error: ${e.localizedMessage}\n              """.trimIndent(), Toast.LENGTH_LONG\n          ).show()\n      }\n\n      setContent {\n          // ...\n      }\n    }\n}\n')),(0,o.kt)("h2",{id:"2-5-create-a-task-data-class"},"2-5 Create a Task data class"),(0,o.kt)("p",null,"Ditto is a document database, which represents all of its rows in the database a JSON-like structure. In this tutorial, we will define each task like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "_id": "123abc",\n  "body": "Get Milk",\n  "isCompleted": true\n}\n')),(0,o.kt)("p",null,'These Task documents will all be in the "tasks" collection. We will be referencing this collection throughout this tutorial with:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tasksCollection = TasksApplication.ditto!!.store["tasks"]\n')),(0,o.kt)("p",null,"Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like Kotlin, we will create a data structure give more definition to the app."),(0,o.kt)("p",null,"Create a new Kotlin file called ",(0,o.kt)("strong",{parentName:"p"},"Task.kt")," in your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Task.kt"',title:'"Task.kt"'},'data class Task(\n    val _id: String = UUID.randomUUID().toString(),\n    val body: String,\n    val isCompleted: Boolean\n) {\n    constructor(document: DittoDocument) : this(\n        document["_id"].stringValue,\n        document["body"].stringValue,\n        document["isCompleted"].booleanValue\n    ) {\n\n    }\n}\n')),(0,o.kt)("p",null,"This data class takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoDocument")," and safely parses out the values into native Kotlin types. We also added an additional constructor that allows for us to preview data without requiring DItto."),(0,o.kt)("p",null,"So now in our application if we want a ",(0,o.kt)("inlineCode",{parentName:"p"},"List<Task>")," we write the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tasks: List<Task> = TasksApplication\n  .ditto!!.store["tasks]\n  .findAll()\n  .exec().map { it -> Task(it) }\n')),(0,o.kt)("p",null,"Once we set up our user interface, you'll notice that reading these values becomes a bit easier with this added structure."))}u.isMDXComponent=!0}}]);