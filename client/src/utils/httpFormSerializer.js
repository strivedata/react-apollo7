/**
 * Serialize data for HTTP FORM requests.
 */
export function urlEncodeData(data) {
    let str = [];
    for(let p in data) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
    }
    return str.join('&');
}
