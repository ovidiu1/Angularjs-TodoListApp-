(function(){
    angular.module("ToDoApp").constant('ItemData',{
        Data:[
            {
                content:"Work 1",
                category:"work",
                date:"04/04/2017",
                time: "11:02",
                color:"red",
                editing: false,
                done:true
            },
             {
                content:"Work 2",
                category:"work",
                date:"04/04/2017",
                time: "13:02",
                color:"red",
                editing: false,
                done:false                
            },
             {
                content:"Work 3",
                category:"work",
                date:"04/04/2017",
                time: "12:02",
                color:"red",
                editing: false,
                done:false                
            },
            {
                content:"Life 1",
                category: "personal_life",
                date:"04/03/2017",
                time: "17:02",
                editing: false,
                done:true                
                
            },
            {
                content:"Life 2",
                category: "personal_life",
                date:"04/02/2017",
                time: "16:02",
                editing: false,
                done:false                
                
            },
            {
                content:"Life 3",
                category: "personal_life",
                date:"04/01/2017",
                time: "01:02",
                editing: false,
                done:false                
            },
            {
                content:"Wish 1",
                category:"wishlist",
                date:"04/05/2017",
                time: "02:22",
                editing: false,
                done:true                                
            },
            {
                content:"Wish 2",
                category:"wishlist",
                date:"04/01/2017",
                time: "20:22",
                editing: false,
                done:false                                
            },
            {
                content:"Wish 3",
                category:"wishlist",
                date:"04/06/2016",
                time: "21:22",
                editing: false,
                done:false                             
            }
        ]
    });
       
})();