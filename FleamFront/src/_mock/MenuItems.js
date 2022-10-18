export const MenuRoutes = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Marketplace',
        path:'/market-place',
        elements:[
            {title:'Marketplace',path:'/market-place/nft'},
            {title:'Categories',path:'/market-place/categories'},
            {title:'Collections',path:'/market-place/collections'},
            {title:'Create Product',path:'/market-place/create-nft', notLoginVisible: 'hidden'},
            {title:'Memberships',path:'/market-place/memberships'},
        ]
    },
    // {
    //     title:'Brand',
    //     path:'/brand'
    // },
    // {
    //     title:'Collections',
    //     path:'/collections'
    // },
    {
        title:'Brand Relations',
        path:'/corporate',
        elements:[
            {title:'Brand Relations',path:'/corporate/corporate'},
            {title:'Partners',path:'/corporate/partners'},
        ]
    },
    {
        title:'Resources',
        path:'/resources',
        elements:[
            {title:'For Beginners',path:'/resources/beginners'},
            {title:'For Charities',path:'/resources/charities'},
            {title:'For Brands',path:'/resources/brands'},
            {title:'Help FAQ',path:'https://fleamint.zendesk.com/hc/en-us', outLink:true},
            {title:'Licences',path:'/resources/licences'},
            {title:'Bug Bounty',path:'https://fleamint.zendesk.com/hc/en-us/requests/new', outLink:true},
        ]
    },
    {
        title:'My Profile',
        path:'/account',
        elements:[
            {title:'My Profile',path:'/account/profile/me', notLoginVisible: 'hidden'},
            {title:'Edit Profile',path:'/account/edit', notLoginVisible: 'hidden'},
            {title:'Leader Board',path:'/account/leader-board'},
            // {title:'Brand Profile',path:'/account/brand'},
            {title:'Analytics',path:'/account/analytics', notLoginVisible: 'brandPartner'},
            // {title:'Help Center',path:'/account/help'}
        ]
    }
    // {
    //     title:'Blogs',
    //     path:'/blogs'
    // }
]
