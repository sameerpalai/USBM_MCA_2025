async function fetchData() {
    try{
        const response = await fetch(ur1);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData(); //invoke
