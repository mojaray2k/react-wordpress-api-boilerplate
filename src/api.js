const baseUrl = `http://imaginationeverywhere.info/ie2018/wp-json/wp/v2/`

export default class Api {
    posts() {
        let url = `${baseUrl}posts`
        return fetch(url).then(res => res.json())
    }
}