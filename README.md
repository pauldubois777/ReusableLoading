# ReusableLoading

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

I created it as an example of how to have a "Loading" service and component that can be used by all other components and services to indicate when loading is taking place.

The ActiveTask Service keeps track of what tasks are active, and emits changes to the list.

Components and services are responsible for using the service to add and remove tasks from the active list.

The TaskIndicator Component subscribes to the ActiveTask service for changes to the list, and displays a list of tasks that are running.  This is the component you can alter for your needs, and place where you need it.

The main page uses routing to show the Home page, Page 1, or Page 2.

Each page simulates loading in OnInit by creating an active task, and setting a timeout on it.  The loading task will be removed after the timeout, or if the component is destroyed.  

The Home page has a button to add local active tasks in the component.  This simulates tasks within the component that need to show an indicator.  There is also a button to remove the oldest task.  All tasks will be removed when the component is destroyed.

Page 1 and Page 2 both have a button to simulate running a service task.  The service tasks take care of adding and removing the task for the service.  Thus when you start one of these service tasks, you will see that the service task persists, even if you navigate off of the page that started the service.

I hope that this code helps you, and please let me know if you have any ideas on how to improve this code.  Thanks!    
