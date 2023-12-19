//JavaScript does NOT have a built in Stack nor Queue data structure.

//Stacks

//easy visualization - browser history.
// you visit 1- google...
//2 - udemy
//3 - youtube

//youtube would be on the top of the stack.

//Stacks can be built in either Arrays or Linked Lists - depends on what you prefer + what your priorities are.

//Arrays allow cache locality, which makes them technically faster when accessing its items in memory because they are next to each other. However, arrrays are either fixed or dynamic - dynamic arrays will double up memory automatically as it grows.

//Linked Lists are stored randomly in memory. And they have an extra memory cost because you have to hold onto pointers. But they have dynamic memory - We can keep adding things to the list and possibly incur less data cost vs arrays which will double up periodically as we add more data


//Queues
//easy visualization - waitlist app

//people showing up...
//1st. Matt -- Joy -- Samir -- Pavel / last

//Only build Queues with Linked Lists. because Arrays have indexes associated with them - meaning when unshift occurs it costs O(n) as all indexes must shift if things are removed. vs linked lists, O(1) removal.
