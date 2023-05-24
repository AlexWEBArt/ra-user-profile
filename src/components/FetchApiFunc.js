import profileList from '../data/users.json';
import user1 from '../data/1.json';
import user2 from '../data/2.json';
import user3 from '../data/3.json';
import user4 from '../data/4.json';
import user5 from '../data/5.json';
import user6 from '../data/6.json';
import user7 from '../data/7.json';
import user8 from '../data/8.json';
import user9 from '../data/9.json';
import user10 from '../data/10.json';


export async function getProfilesList(url) {
    // const request = fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })

    // const result = await request;

    // if (!result.ok) {
    //     console.error('Ошибка');

    //     return
    // }

    // return await result.json()
    return profileList
}

export async function getProfileDetails(url, id) {
    // const request = fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(id)
    // })

    // const result = await request;

    // if (!result.ok) {
    //     console.error('Ошибка');

    //     return
    // }
    switch (id) {
        case 1:
            return user1
        case 2:
            return user2
        case 3:
            return user3
        case 4:
            return user4
        case 5:
            return user5
        case 6:
            return user6
        case 7:
            return user7
        case 8:
            return user8
        case 9:
            return user9
        case 10:
            return user10
        default:
            return
    }

}