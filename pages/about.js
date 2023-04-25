import ErrorPage from '../components/ErrorPage'

async function getData() {
    try {
        const res = await fetch('https://www.apprendreletunisien.com/js/ajaxRechercheDictionnaire.php')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default function About() {
    const data = getData()
    console.log(data)

    return (
        <ErrorPage />
    )
}
