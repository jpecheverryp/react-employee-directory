export default function dateParser(date) {
    const dateJson = {
        year: date.substring(0,4),
        month: date.substring(5,7),
        day: date.substring(8, 10)
    }
    const formatted = `${dateJson.month}-${dateJson.day}-${dateJson.year}`
    return formatted
}