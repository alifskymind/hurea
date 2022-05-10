import React from "react"

export default function TablePredicted() {
  return (

    <div className="overflow-x-auto">

        <table className="table table-zebra w-full">

          {/* head */}
          <thead>
            <tr>
              <th />
              <th>Unix Timestamp</th>
              <th>Date Time</th>
              <th>Temperature in Celcius</th>
            </tr>
          </thead>

          <tbody>

            {/* row 1 */}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}

            {/* row 2 */}
            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr> */}

            {/* row 3 */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}

          </tbody>

        </table>

    </div>

  )
}