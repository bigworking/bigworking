import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import admin from '@/components/admin'
import repair from '@/view/repair'
import information from '@/view/information'
import look from '@/view/repair/look'
import fix from '@/view/repair/fix'
import write from '@/view/repair/write'
import protectinformation from '@/view/protect/protectinformation'
import protectprove from '@/view/protect/protectprove'
import protectmanager from '@/view/protect/protectmanager'
import protectlook from '@/view/protect/protectlook'
import protectfix from '@/view/protect/protectfix'
import devicechart from '@/view/chart/devicechart'
import repairchart from '@/view/chart/repairchart'
import protectchart from '@/view/chart/protectchart'
import pricechart from '@/view/chart/pricechart'
import protectpeople from '@/components/protectpeople'
import protectinstruct from '@/view/protectinstruct'
import protectwrite from '@/view/protectwrite'
import repairpeople from '@/components/repairpeople'
import repairinstruct from '@/view/repairinstruct'
import repairwrite from '@/view/repairwrite'

Vue.use(Router)
// const router = new Router({
export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/register'
        },
        {
            path:'/register',
            name:'register',
            component:register,
        },
        {
            path:'/admin',
            name:'admin',
            component:admin,
            children:[{
                path:'/repair',
                name:'repair',
                component:repair,
            },
            {
                path:'/information',
                name:'information',
                component:information,
            },
            {
                path:'/look/:orderno',
                name:'look',
                component:look,
            },
            {
                path:'/fix/:orderno',
                name:'fix',
                component:fix,
            },
            {
                path:'/write',
                name:'write',
                component:write,
            },
            {
                path:'/protectinformation',
                name:'protectinformation',
                component:protectinformation,
            },
            {
                path:'/protectprove',
                name:'protectprove',
                component:protectprove,
            },
            {
                path:'/protectmanager',
                name:'protectmanager',
                component:protectmanager,
            },
            {
                path:'/protectlook/:protectno',
                name:'protectlook',
                component:protectlook,
            },
            {
                path:'/protectfix/:protectno',
                name:'protectfix',
                component:protectfix,
            },
            {
                path:'/devicechart',
                name:'devicechart',
                component:devicechart,
            },
            {
                path:'/repairchart',
                name:'repairchart',
                component:repairchart,
            },
            {
                path:'/protectchart',
                name:'protectchart',
                component:protectchart,
            },
            {
                path:'/pricechart',
                name:'pricechart',
                component:pricechart,
            },
        ]
        },
        {
            path:'/protectpeople',
            name:'protectpeople',
            component:protectpeople,
            children:[
                {
                    path:'/protectinstruct',
                    name:'protectinstruct',
                    component:protectinstruct,
                },
                {
                    path:'/protectwrite',
                    name:'protectwrite',
                    component:protectwrite,
                },
            ]
        },
        {
            path:'/repairpeople',
            name:'repairpeople',
            component:repairpeople,
            children:[
                {
                    path:'/repairinstruct',
                    name:'repairinstruct',
                    component:repairinstruct,
                },
                {
                    path:'/repairwrite',
                    name:'repairwrite',
                    component:repairwrite,
                },
            ]
        },
    ]
})

// router.beforeEach((to, from, next) => {
//         if (to.path === '/content') {
//           next();
//         } else {
//           let token = localStorage.getItem('Authorization');
//           if (token === null || token === '') {
//             next('/content');
//           } else {
//             next();
//           }
//         }
//       });
//       export default router;
