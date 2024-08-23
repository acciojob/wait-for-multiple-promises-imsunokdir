//your JS code here. If required.
let tbody = document.getElementById("output");
const row = document.createElement("tr");
row.id="loading"
row.innerHTML = `
<td colspan="2">Loading...</td>
`
tbody.append(row)

function generatePromise(prom){
	return new Promise((resolve)=>{
		const num = (Math.random() * 2 + 1).toFixed(3)
		setTimeout(()=>{
			resolve({prom, num})
		},num*1000)
	})
}
const promiseArray = [] 
for(let i=1;i<=3;i++){
	promiseArray.push(generatePromise(i));
}

const startTime = performance.now();

Promise.all(promiseArray).then((res)=>{
	const totalTimeTaken = (performance.now() - startTime / 1000).toFixed(3);
	tbody.innerHTML="";

    res.forEach((result) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>Promise ${result.prom}</td>
            <td>${result.num} seconds</td>
        `;
        tbody.append(tr);
    });
	const total = document.createElement("tr");
	total.innerHTML = `
	<td>Total</td>
	<td>${totalTimeTaken}</td>
	`;
	tbody.append(total)
})





























