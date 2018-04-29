const baseUrl = `http://imaginationeverywhere.info/ie2018/wp-json/wp/v2/`

export default class Api {
    posts(id) {
        let url = `${baseUrl}posts`;

        if(id !== undefined) {
            url += `/${id}`;
        }
        return fetch(url).then(res => res.json())
    }
}