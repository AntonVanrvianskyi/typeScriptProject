// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
interface ICores {
    flight: number,
    core:{
        reuse_count:number,
        status: string

    }
}
interface IPayload{

    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number

}
interface IUser {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
    site_name_long: string,
},
    links: {
    article_link: string,
        video_link: string
},
    rocket: {
    rocket_name: "Falcon 9",
        first_stage: {
        cores: ICores[]
    },
    second_stage: {
        payloads: IPayload[]

    }
}
}

// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

    interface IMan  {
        name:string
        age:number
        gender: string
    }
const user: IMan = {name:'Max', age:13, gender: 'male'}


function sum(a:number,b:number):number{
    return a+b
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:IMan, inc:number):IMan{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2);