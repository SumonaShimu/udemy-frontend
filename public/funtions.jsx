
export function changeInnerText(item) {
    const element = document.getElementById('content');
    console.log(element.innerText)
    element.innerHTML = 
    `
    <h1>${item.Name}</h1>
    Price: Rs. ${item.Price}
    <h1>Item Id: ${item.id}</h1>
    `
    
    return <h1></h1>
}