(function(){
    angular.module("ToDoApp").constant('ItemData',{
        Data:[
            {
                content:"Text 1",
                category:"Work",
                date:"04/04/2017",
                time: "11:02",
                status: "Done!",
                color:"red"
            },
            {
                content:"Text 2",
                category: "Work",
                date:"04/04/2017",
                time: "05:02",
                status: "In Progress!"
              
            },
            {
                content:"Text 3",
                category:"Work",
                date:"04/04/2017",
                time: "03:22",
                status: "Done!"
            }
        ]
    });
       
})();