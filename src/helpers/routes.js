import { getPosts } from "../services/requests"
import { addPostPage } from "../store/slices/posts"

export const dataHandling = (route, users, data) => {
    // console.log(route, users, data)
    if(route === 'posts') {
        const { userId, title, body } = data
        const user = users.find((u) => u.id === userId).username
        // console.log({
        //     route,
        //     user,
        //     title,
        //     body
        // })
        return {
            user,
            title,
            body
        }
    }
}

export const extraValues = (data, perPage, setEmptyRows, emptyRows, element) => {
    if(data.length < perPage) {
        let count = perPage - data.length
        const extra = []
        while (count !== 0) {
            extra.push(element)
            count = count - 1
        }
        setEmptyRows(extra)
    } else {
        if(emptyRows.length > 0) setEmptyRows([])
    }
}

export const request = {
    posts: {
        perPage: 6,
        func: getPosts,
        users: true,
        dispatchFunc: addPostPage
    }
}