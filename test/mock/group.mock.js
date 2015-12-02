window.Mocks = window.Mocks || {};
Mocks.groupListing = `{
    "@count":"3",
    "@querycount":"3",
    "@totalcount":"3",
    "@href":"https://marsdev.mindtouch.dev/@api/deki/groups",
    "group":[
        {
            "@id":"2",
            "@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2",
            "groupname":"<script>alert('z')</script>",
            "permissions.group":{
                "operations":{"@mask":"49215","#text":"LOGIN,BROWSE,READ,SUBSCRIBE,UPDATE,CREATE,DRAFT_UPDATE,DRAFT_CREATE"},
                "role":{"@id":"3","@href":"https://marsdev.mindtouch.dev/@api/deki/site/roles/3","#text":"Contributor"}
            },
            "service.authentication":{"@id":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/site/services/1"},
            "users":{"@count":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2/users"}
        },
        {
            "@id":"3",
            "@href":"https://marsdev.mindtouch.dev/@api/deki/groups/3",
            "groupname":"hooray",
            "permissions.group":{
                "operations":{"@mask":"49215","#text":"LOGIN,BROWSE,READ,SUBSCRIBE,UPDATE,CREATE,DRAFT_UPDATE,DRAFT_CREATE"},
                "role":{"@id":"3","@href":"https://marsdev.mindtouch.dev/@api/deki/site/roles/3","#text":"Contributor"}
            },
            "service.authentication":{"@id":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/site/services/1"},
            "users":{"@count":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/groups/3/users"}
        },
        {
            "@id":"4",
            "@href":"https://marsdev.mindtouch.dev/@api/deki/groups/4",
            "groupname":"goodbye",
            "permissions.group":{
                "operations":{"@mask":"15","#text":"LOGIN,BROWSE,READ,SUBSCRIBE"},
                "role":{"@id":"2","@href":"https://marsdev.mindtouch.dev/@api/deki/site/roles/2","#text":"Viewer"}
            },
            "service.authentication":{"@id":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/site/services/1"},
            "users":{"@count":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/groups/4/users"}
        }
    ]
}`;
Mocks.groupListingSingle = `{
    "@count":"1",
    "@querycount":"1",
    "@totalcount":"1",
    "@href":"https://marsdev.mindtouch.dev/@api/deki/groups",
    "group":{
        "@id":"2",
        "@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2",
        "groupname":"<script>alert('z')</script>",
        "permissions.group":{
            "operations":{"@mask":"49215","#text":"LOGIN,BROWSE,READ,SUBSCRIBE,UPDATE,CREATE,DRAFT_UPDATE,DRAFT_CREATE"},
            "role":{"@id":"3","@href":"https://marsdev.mindtouch.dev/@api/deki/site/roles/3","#text":"Contributor"}
        },
        "service.authentication":{"@id":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/site/services/1"},
        "users":{"@count":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2/users"}
    }
}`;
Mocks.groupListingEmpty = `{
    "@count":"0",
    "@querycount":"0",
    "@totalcount":"0",
    "@href":"https://marsdev.mindtouch.dev/@api/deki/groups"
}`;
Mocks.group = `{
    "@id":"2",
    "@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2",
    "groupname":"<script>alert('z')</script>",
    "permissions.group":{
        "operations":{"@mask":"49215","#text":"LOGIN,BROWSE,READ,SUBSCRIBE,UPDATE,CREATE,DRAFT_UPDATE,DRAFT_CREATE"},
        "role":{"@id":"3","@href":"https://marsdev.mindtouch.dev/@api/deki/site/roles/3","#text":"Contributor"}
    },
    "service.authentication":{"@id":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/site/services/1"},
    "users":{"@count":"1","@href":"https://marsdev.mindtouch.dev/@api/deki/groups/2/users"}
}`;
