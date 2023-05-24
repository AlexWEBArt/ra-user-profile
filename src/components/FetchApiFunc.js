export async function getProfilesList(url) {
    const request = fetch(url, {
        method: 'GET',
    })

    const result = await request;

    if (!result.ok) {
        console.error('Ошибка');

        return
    }

    return await result.json()
}

export async function getProfileDetails(url, id) {
    const request = fetch(url + id + '.json', {
        method: 'GET',
    })

    const result = await request;

    if (!result.ok) {
        console.error('Ошибка');

        return
    }

    return await result.json()
}