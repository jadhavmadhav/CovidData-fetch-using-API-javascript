

async function ShowData() {

   const Req = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
   const result = await Req.json()



   // Get the State Data using Map Methods
   //   store state data in StateTable

   const StateTable = result.data.regional;

   StateTable.map((ele) => {
      const { loc, confirmedCasesIndian, discharged, deaths, totalConfirmed } = ele
      //  Get Element in UI And Display
      const Display_Table = document.getElementById('displayTable')

      return Display_Table.innerHTML += `
    <tr>
    <td>${loc}</td>
    <td>${confirmedCasesIndian}</td>
    <td>${discharged}</td>
    <td>${deaths}</td>
    <td>${totalConfirmed}</td>
</tr>`})

   const Display = document.getElementById('displaydata')

   return (Display.innerHTML += `
       <div class="card col-md-6  m-auto">
        <div class="card-header">
          <h4 class="text-center">India</h4>
        </div>
        <div class="p-4">
          <p>Total case : ${result.data.summary.total}</p> 
          <p>ConfirmedCasesIndian : ${result.data.summary.confirmedCasesIndian}</p>
          <p>discharged : ${result.data.summary.discharged}</p>
          <p>deaths : ${result.data.summary.deaths}</p>
        </div>
       </div> `)

}

ShowData()

