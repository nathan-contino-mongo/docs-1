"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6480],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59289:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],r={title:"3 - Assigning Commands"},l=void 0,c={unversionedId:"tutorials/c-sharp-console/assigning-commands",id:"tutorials/c-sharp-console/assigning-commands",isDocsHomePage:!1,title:"3 - Assigning Commands",description:"In this section we need to map the",source:"@site/docs/tutorials/c-sharp-console/3-assigning-commands.md",sourceDirName:"tutorials/c-sharp-console",slug:"/tutorials/c-sharp-console/assigning-commands",permalink:"/pr-preview/pr-200/tutorials/c-sharp-console/assigning-commands",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/c-sharp-console/3-assigning-commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Assigning Commands"},sidebar:"tutorialSidebar",previous:{title:"2 - Configuring Commands",permalink:"/pr-preview/pr-200/tutorials/c-sharp-console/configuring-commands"},next:{title:"Register",permalink:"/pr-preview/pr-200/datamodel/register"}},d=[{value:"3-1 Setting up the <code>while</code> loop.",id:"3-1-setting-up-the-while-loop",children:[],level:2},{value:"3-2 Final application",id:"3-2-final-application",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we need to map the"),(0,a.kt)("h2",{id:"3-1-setting-up-the-while-loop"},"3-1 Setting up the ",(0,a.kt)("inlineCode",{parentName:"h2"},"while")," loop."),(0,a.kt)("p",null,"Our application will continually ask for commands that we setup in the last section. For a console application, this is generally a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To determine whether or not the while loop should run, we need an addition ",(0,a.kt)("inlineCode",{parentName:"li"},"static bool isAskedToExit = false"),". If the user turns this to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," via the ",(0,a.kt)("inlineCode",{parentName:"li"},"--exit")," command, the while loop will stop and the application will exit."),(0,a.kt)("li",{parentName:"ol"},"In each iteration of the while loop, we will need read the command from the user. In C#, we can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Console.ReadLine")," API, which will prompt the user for a string entry. We can store this into ",(0,a.kt)("inlineCode",{parentName:"li"},"string command"),"."),(0,a.kt)("li",{parentName:"ol"},"We can add a ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," statement which will parse the correct command and react to the command."),(0,a.kt)("li",{parentName:"ol"},"If the user types in ",(0,a.kt)("inlineCode",{parentName:"li"},"--insert"),", we will parse out the string without the ",(0,a.kt)("inlineCode",{parentName:"li"},"--insert")," command. We assume this string is the ",(0,a.kt)("inlineCode",{parentName:"li"},"body")," for a new document. So we will call the ",(0,a.kt)("inlineCode",{parentName:"li"},".upsert")," command with ditto via:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string taskBody = s.Replace("--insert ", "");\nditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Check for a switch case for ",(0,a.kt)("inlineCode",{parentName:"li"},"--toggle"),". We will parse out the string without ",(0,a.kt)("inlineCode",{parentName:"li"},"--toggle")," and assume the user's input is a Task document's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id"),". We can then find the document by it's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," and call ",(0,a.kt)("inlineCode",{parentName:"li"},".update")),(0,a.kt)("li",{parentName:"ol"},"Check for a switch case for ",(0,a.kt)("inlineCode",{parentName:"li"},"--delete"),". We will parse out the string without ",(0,a.kt)("inlineCode",{parentName:"li"},"--delete")," and assume the user's input is a Task document's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id"),". We can then find the document by it's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," and call ",(0,a.kt)("inlineCode",{parentName:"li"},".update")),(0,a.kt)("li",{parentName:"ol"},"Finally we will add a command to look for ",(0,a.kt)("inlineCode",{parentName:"li"},"--list"),", which will print out all the tasks that we've synced.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n        // 1.\n        // highlight-next-line\n        static bool isAskedToExit = false;\n        static List<Task> tasks = new List<Task>();\n        static DittoLiveQuery liveQuery;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n\n            /**\n            * Omitted for brevity\n            */\n\n            liveQuery = ditto.Store["tasks"].FindAll().Observe((docs, _event) => {\n                tasks = docs.ConvertAll(d => new Task(d));\n            });\n\n            ListCommands();\n\n            while (!isAskedToExit)\n            {\n\n                // 2.\n                // highlight-start\n                Console.Write("\\nYour command: ");\n                string command = Console.ReadLine();\n                // highlight-end\n\n                switch (command)\n                {\n\n                    // 3. 4.\n                    // highlight-start\n                    case string s when command.StartsWith("--insert"):\n                        string taskBody = s.Replace("--insert ", "");\n                        ditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n                        break;\n                        // highlight-end\n                    // 5.\n                    // highlight-start\n                    case string s when command.StartsWith("--toggle"):\n                        string _idToToggle = s.Replace("--toggle ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToToggle))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isCompleted"].Set(!mutableDoc["isCompleted"].BooleanValue);\n                            });\n                        break;\n                    // highlight-end\n                    // 6.\n                    // highlight-start\n                    case string s when command.StartsWith("--delete"):\n                        string _idToDelete = s.Replace("--delete ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToDelete))\n                            .Remove();\n                        break;\n                    case { } when command.StartsWith("--list"):\n                        tasks.ForEach(task =>\n                        {\n                            Console.WriteLine(task.ToString());\n                        });\n                        break;\n                    // highlight-end\n                    // 1.\n                    // highlight-start\n                    case { } when command.StartsWith("--exit"):\n                        Console.WriteLine("Good bye!");\n                        isAskedToExit = true;\n                        break;\n                    // highlight-end\n                    default:\n                        Console.WriteLine("Unknown command");\n                        ListCommands();\n                        break;\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"3-2-final-application"},"3-2 Final application"),(0,a.kt)("p",null,"Our application is complete! Our ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")," file should look like the following. Now you can run the example in your terminal, command line or right within the run command in Visual Studio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n        static bool isAskedToExit = false;\n        static List<Task> tasks = new List<Task>();\n        static DittoLiveQuery liveQuery;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n\n            try\n            {\n                ditto.SetLicenseToken("<REPlACE_ME>");\n                ditto.TryStartSync();\n            }\n            catch (DittoException ex)\n            {\n                Console.WriteLine("There was an error starting Ditto.");\n                Console.WriteLine("Here\'s the following error");\n                Console.WriteLine(ex.ToString());\n                Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n                Console.WriteLine("Ditto will still work as a local database.");\n            }\n\n            Console.WriteLine("Welcome to Ditto\'s Task App");\n\n            liveQuery = ditto.Store["tasks"].FindAll().Observe((docs, _event) => {\n                tasks = docs.ConvertAll(d => new Task(d));\n            });\n\n            ListCommands();\n\n            while (!isAskedToExit)\n            {\n\n                Console.Write("\\nYour command: ");\n                string command = Console.ReadLine();\n\n                switch (command)\n                {\n\n                    case string s when command.StartsWith("--insert"):\n                        string taskBody = s.Replace("--insert ", "");\n                        ditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n                        break;\n                    case string s when command.StartsWith("--toggle"):\n                        string _idToToggle = s.Replace("--toggle ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToToggle))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isCompleted"].Set(!mutableDoc["isCompleted"].BooleanValue);\n                            });\n                        break;\n                    case string s when command.StartsWith("--delete"):\n                        string _idToDelete = s.Replace("--delete ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToDelete))\n                            .Remove();\n                        break;\n                    case { } when command.StartsWith("--list"):\n                        tasks.ForEach(task =>\n                        {\n                            Console.WriteLine(task.ToString());\n                        });\n                        break;\n                    case { } when command.StartsWith("--exit"):\n                        Console.WriteLine("Good bye!");\n                        isAskedToExit = true;\n                        break;\n                    default:\n                        Console.WriteLine("Unknown command");\n                        ListCommands();\n                        break;\n                }\n            }\n        }\n\n        public static void ListCommands()\n        {\n            Console.WriteLine("************* Commands *************");\n            Console.WriteLine("--insert my new task");\n            Console.WriteLine("   Inserts a task");\n            Console.WriteLine("   Example: \\"--insert Get Milk\\"");\n            Console.WriteLine("--toggle myTaskTd");\n            Console.WriteLine("   Toggles the isComplete property to the opposite value");\n            Console.WriteLine("   Example: \\"--toggle 1234abc\\"");\n            Console.WriteLine("--delete myTaskTd");\n            Console.WriteLine("   Deletes a task");\n            Console.WriteLine("   Example: \\"--delete 1234abc\\"");\n            Console.WriteLine("--list");\n            Console.WriteLine("   List the current tasks");\n            Console.WriteLine("--exit");\n            Console.WriteLine("   Exits the program");\n            Console.WriteLine("************* Commands *************");\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);