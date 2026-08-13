// const tinderUser = new Object() - this is single ton object
const tinderUser = {} // this is not single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@some",
    fullName: {
        userFullname: {
            firstName: "Antigravity",
            lastName: "Google"
        }
    }
}

// console.log(regularUser.fullName?.userFullname) - the ? mark is when added then it called optional chaining - it used when we are handling api
// console.log(regularUser.fullName.userFullname)

// combining two objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1,obj2} - this is wrong
// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Antigravity"
    },
    {
        id: 2,
        name: "Javascript"
    }
]

// console.log(users[1].name)
const userData = Object.keys(tinderUser)

// users.map((user) => (console.log(`The name of the user is ${user.name} and its id is ${user.id}`)))

// console.log(tinderUser.hasOwnProperty("id"))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

// destructuring of object
const course = {
    courseName:"js series",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor)

// const navbar = ({company}) => {
//     console.log(company)
// }
// const comp = {company:"hiteshCompany"}
// navbar(comp)

// api - just an values comes from backend asia samjho abhi ke liye

// {
//     "name":"Antigravity",
//     "courseName":"js in hindi series",
//     "price":"free"
// }

// https://api.github.com/users/DeveloperSRGonline 

// {
//   "login": "DeveloperSRGonline",
//   "id": 177343433,
//   "node_id": "U_kgDOCpILyQ",
//   "avatar_url": "https://avatars.githubusercontent.com/u/177343433?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/DeveloperSRGonline",
//   "html_url": "https://github.com/DeveloperSRGonline",
//   "followers_url": "https://api.github.com/users/DeveloperSRGonline/followers",
//   "following_url": "https://api.github.com/users/DeveloperSRGonline/following{/other_user}",
//   "gists_url": "https://api.github.com/users/DeveloperSRGonline/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/DeveloperSRGonline/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/DeveloperSRGonline/subscriptions",
//   "organizations_url": "https://api.github.com/users/DeveloperSRGonline/orgs",
//   "repos_url": "https://api.github.com/users/DeveloperSRGonline/repos",
//   "events_url": "https://api.github.com/users/DeveloperSRGonline/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/DeveloperSRGonline/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Shivam Garade",
//   "company": null,
//   "blog": "https://portfolio-shivam-garade.vercel.app",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": "From Nothing heading towards Something by failing more than most people try...",
//   "twitter_username": "srgwebsquare",
//   "public_repos": 98,
//   "public_gists": 0,
//   "followers": 3,
//   "following": 7,
//   "created_at": "2024-08-02T15:55:42Z",
//   "updated_at": "2026-06-21T07:18:46Z"
// }


// is tarike se bhi
// [
//     {},
//     {},
//     {}
// ]