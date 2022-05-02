"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2359],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(v,r(r({ref:t},c),{},{components:n})):i.createElement(v,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77891:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"3 - Activities"},d=void 0,s={unversionedId:"tutorials/android-kotlin/activities",id:"tutorials/android-kotlin/activities",isDocsHomePage:!1,title:"3 - Activities",description:"3-1 Configure Main Activity Part I",source:"@site/docs/tutorials/android-kotlin/3-activities.md",sourceDirName:"tutorials/android-kotlin",slug:"/tutorials/android-kotlin/activities",permalink:"/pr-preview/pr-185/tutorials/android-kotlin/activities",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/android-kotlin/3-activities.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Activities"},sidebar:"tutorialSidebar",previous:{title:"2 - Create UI",permalink:"/pr-preview/pr-185/tutorials/android-kotlin/create-ui"},next:{title:"4 - Integrate Ditto",permalink:"/pr-preview/pr-185/tutorials/android-kotlin/integrate-ditto"}},c=[{value:"3-1 Configure Main Activity Part I",id:"3-1-configure-main-activity-part-i",children:[],level:2},{value:"3-2 Add New Task Functions",id:"3-2-add-new-task-functions",children:[],level:2},{value:"3-3 Create A Task View Layout",id:"3-3-create-a-task-view-layout",children:[],level:2},{value:"3-4 Configure Main Activity Part II",id:"3-4-configure-main-activity-part-ii",children:[],level:2},{value:"3-5 Add TasksAdapter",id:"3-5-add-tasksadapter",children:[],level:2},{value:"3-6 Add Swipe To Delete",id:"3-6-add-swipe-to-delete",children:[],level:2}],p={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"3-1-configure-main-activity-part-i"},"3-1 Configure Main Activity Part I"),(0,o.kt)("p",null,"We need to import Ditto and create a few variables. Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity file")," and replace the existing code with this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},"package live.ditto.tasks\n\nimport android.os.Bundle\nimport com.google.android.material.snackbar.Snackbar\nimport androidx.appcompat.app.AppCompatActivity\nimport android.view.Menu\nimport android.view.MenuItem\nimport androidx.recyclerview.widget.RecyclerView\nimport androidx.fragment.app.DialogFragment\nimport java.time.Instant\n\nimport kotlinx.android.synthetic.main.activity_main.*\n\nimport live.ditto.*\nimport live.ditto.android.DefaultAndroidDittoDependencies\n\n\nclass MainActivity : AppCompatActivity(), NewTaskDialogFragment.NewTaskDialogListener {\n    private lateinit var recyclerView: RecyclerView\n    private lateinit var viewAdapter: RecyclerView.Adapter<*>\n    private lateinit var viewManager: RecyclerView.LayoutManager\n\n    private var ditto: Ditto? = null\n    private var collection: DittoCollection? = null\n    private var liveQuery: DittoLiveQuery? = null\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        setSupportActionBar(toolbar)\n    }\n}\n\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync Project with Gradle Files")," if it doesn't automatically."),(0,o.kt)("h2",{id:"3-2-add-new-task-functions"},"3-2 Add New Task Functions"),(0,o.kt)("p",null,"We will add a function and override two now that ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity")," is an abstract class. Insert this code after ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()")," function in the class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},'override fun onDialogSave(dialog: DialogFragment, task:String) {\n    // Add the task to Ditto\n    this.collection!!.insert(mapOf("body" to task, "isCompleted" to false))\n}\n\noverride fun onDialogCancel(dialog: DialogFragment) { }\n\nfun showNewTaskUI() {\n    val newFragment = NewTaskDialogFragment.newInstance(R.string.add_new_task_dialog_title)\n    newFragment.show(supportFragmentManager,"newTask")\n}\n\n')),(0,o.kt)("h2",{id:"3-3-create-a-task-view-layout"},"3-3 Create A Task View Layout"),(0,o.kt)("p",null,"Right click on the layouts folder in the project and Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"File \u2192 New \u2192 XML \u2192 Layout XML"),". Name the file ",(0,o.kt)("inlineCode",{parentName:"p"},"task_view"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Task View Layout 1",src:n(95906).Z})),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"task_view.xml")," layout file and replace the XML in the text representation view. This will add a text view and checkbox to display the task in each row of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecyclerView"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=task_view.xml",title:"task_view.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:id="@+id/linearLayout"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content">\n\n    <TextView\n        android:id="@+id/taskTextView"\n        android:layout_width="0dp"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        android:text="TextView"\n        android:textAppearance="@style/TextAppearance.AppCompat.Large"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toStartOf="@+id/taskCheckBox"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent" />\n\n    <CheckBox\n        android:id="@+id/taskCheckBox"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        android:backgroundTint="#FFFFFF"\n        android:clickable="false"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toEndOf="@+id/taskTextView"\n        app:layout_constraintTop_toTopOf="parent" />\n</androidx.constraintlayout.widget.ConstraintLayout>\n\n')),(0,o.kt)("p",null,"The layout should look like this now:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Task View Layout 2",src:n(44555).Z})),(0,o.kt)("h2",{id:"3-4-configure-main-activity-part-ii"},"3-4 Configure Main Activity Part II"),(0,o.kt)("p",null,"We now need to continue to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity")," to customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecyclerView"),", to display the tasks and add the logic for the user actions. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()")," function with this code that will configure the recycler view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},"override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n    setSupportActionBar(toolbar)\n\n    // Setup the layout\n    viewManager = LinearLayoutManager(this)\n    val tasksAdapter = TasksAdapter()\n    viewAdapter = tasksAdapter\n\n    recyclerView = findViewById<RecyclerView>(R.id.recyclerView).apply {\n        setHasFixedSize(true)\n        layoutManager = viewManager\n        adapter = viewAdapter\n    }\n\n    recyclerView.addItemDecoration(DividerItemDecoration(this, DividerItemDecoration.VERTICAL))\n\n}\n\n")),(0,o.kt)("h2",{id:"3-5-add-tasksadapter"},"3-5 Add TasksAdapter"),(0,o.kt)("p",null,"We need to declare a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecyclerView.Adapter")," to provide a data source to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RecyclerView"),". Add this code to the bottom of ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity"),", as a new class within the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},'class TasksAdapter: RecyclerView.Adapter<TasksAdapter.TaskViewHolder>() {\n    private val tasks = mutableListOf<DittoDocument>()\n\n    var onItemClick: ((DittoDocument) -> Unit)? = null\n\n    class TaskViewHolder(v: View): RecyclerView.ViewHolder(v)\n\n    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TaskViewHolder {\n        val view = LayoutInflater.from(parent.context).inflate(R.layout.task_view, parent, false)\n        return TaskViewHolder(view)\n    }\n\n    override fun onBindViewHolder(holder: TaskViewHolder, position: Int) {\n        val task = tasks[position]\n        holder.itemView.taskTextView.text = task["body"].stringValue\n        holder.itemView.taskCheckBox.isChecked = task["isCompleted"].booleanValue\n        holder.itemView.setOnClickListener {\n            // NOTE: Cannot use position as this is not accurate based on async updates\n            onItemClick?.invoke(tasks[holder.adapterPosition])\n        }\n    }\n\n    override fun getItemCount() = this.tasks.size\n\n    fun tasks(): List<DittoDocument> {\n        return this.tasks.toList()\n    }\n\n    fun set(tasks: List<DittoDocument>): Int {\n        this.tasks.clear()\n        this.tasks.addAll(tasks)\n        return this.tasks.size\n    }\n\n    fun inserts(indexes: List<Int>): Int {\n        for (index in indexes) {\n            this.notifyItemRangeInserted(index, 1)\n        }\n        return this.tasks.size\n    }\n\n    fun deletes(indexes: List<Int>): Int {\n        for (index in indexes) {\n            this.notifyItemRangeRemoved(index, 1)\n        }\n        return this.tasks.size\n    }\n\n    fun updates(indexes: List<Int>): Int {\n        for (index in indexes) {\n            this.notifyItemRangeChanged(index, 1)\n        }\n        return this.tasks.size\n    }\n\n    fun moves(moves: List<DittoLiveQueryMove>) {\n        for (move in moves) {\n            this.notifyItemMoved(move.from, move.to)\n        }\n    }\n\n    fun setInitial(tasks: List<DittoDocument>): Int {\n        this.tasks.addAll(tasks)\n        this.notifyDataSetChanged()\n        return this.tasks.size\n    }\n}\n\n')),(0,o.kt)("h2",{id:"3-6-add-swipe-to-delete"},"3-6 Add Swipe To Delete"),(0,o.kt)("p",null,"To match the iOS getting started app, we also want to add swipe to delete functionality. Insert this code at the bottom of ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity")," as a new class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=MainActivity",title:"MainActivity"},'// Swipe to delete based on https://medium.com/@kitek/recyclerview-swipe-to-delete-easier-than-you-thought-cff67ff5e5f6\nabstract class SwipeToDeleteCallback(context: Context) : ItemTouchHelper.SimpleCallback(0, ItemTouchHelper.LEFT) {\n\n    private val deleteIcon = ContextCompat.getDrawable(context, android.R.drawable.ic_menu_delete)\n    private val intrinsicWidth = deleteIcon!!.intrinsicWidth\n    private val intrinsicHeight = deleteIcon!!.intrinsicHeight\n    private val background = ColorDrawable()\n    private val backgroundColor = Color.parseColor("#f44336")\n    private val clearPaint = Paint().apply { xfermode = PorterDuffXfermode(PorterDuff.Mode.CLEAR) }\n\n\n    override fun onMove(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder, target: RecyclerView.ViewHolder): Boolean {\n        return false\n    }\n\n    override fun onChildDraw(\n        c: Canvas, recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder,\n        dX: Float, dY: Float, actionState: Int, isCurrentlyActive: Boolean\n    ) {\n\n        val itemView = viewHolder.itemView\n        val itemHeight = itemView.bottom - itemView.top\n        val isCanceled = dX == 0f && !isCurrentlyActive\n\n        if (isCanceled) {\n            clearCanvas(c, itemView.right + dX, itemView.top.toFloat(), itemView.right.toFloat(), itemView.bottom.toFloat())\n            super.onChildDraw(c, recyclerView, viewHolder, dX, dY, actionState, isCurrentlyActive)\n            return\n        }\n\n        // Draw the red delete background\n        background.color = backgroundColor\n        background.setBounds(itemView.right + dX.toInt(), itemView.top, itemView.right, itemView.bottom)\n        background.draw(c)\n\n        // Calculate position of delete icon\n        val deleteIconTop = itemView.top + (itemHeight - intrinsicHeight) / 2\n        val deleteIconMargin = (itemHeight - intrinsicHeight) / 2\n        val deleteIconLeft = itemView.right - deleteIconMargin - intrinsicWidth\n        val deleteIconRight = itemView.right - deleteIconMargin\n        val deleteIconBottom = deleteIconTop + intrinsicHeight\n\n        // Draw the delete icon\n        deleteIcon!!.setBounds(deleteIconLeft, deleteIconTop, deleteIconRight, deleteIconBottom)\n        deleteIcon.setTint(Color.parseColor("#ffffff"))\n        deleteIcon.draw(c)\n\n        super.onChildDraw(c, recyclerView, viewHolder, dX, dY, actionState, isCurrentlyActive)\n    }\n\n    private fun clearCanvas(c: Canvas?, left: Float, top: Float, right: Float, bottom: Float) {\n        c?.drawRect(left, top, right, bottom, clearPaint)\n    }\n}\n')),(0,o.kt)("p",null,"Almost there! At this point, we have most of the app created, but we now need to integrate Ditto!"))}u.isMDXComponent=!0},95906:function(e,t,n){t.Z=n.p+"assets/images/create_task_view1-2456d039cae73f2d54b6880fa4ce40c2.png"},44555:function(e,t,n){t.Z=n.p+"assets/images/create_task_view2-76a2024ad6793b538041231beedaaeea.png"}}]);