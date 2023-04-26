import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IProduct } from '../../../models/product'

interface Props {
  values: Array<IProduct>,
  handleDeleteProduct(id: number): void
}

const ProducForm = (props: Props) => {
  const { values, handleDeleteProduct } = props

  const totalRecord = values.length;
  const totalPage = Math.ceil(totalRecord / 5)

  let page = []
  for (let i = 1; i <= totalPage; i++) {
    let button = (
      <button key={i} onClick={() => { }}>{i}</button>
    )
    page.push(button)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Date</th>
            <th>Client</th>
            <th>Currency</th>
            <th>Total</th>
            <th>Invoice#</th>
            <th>Action</th>
          </tr>
          {values.map((item: any, index) => {
            return (
              <tr key={index}>
                <th>{item.status}</th>
                <th>{item.updatedAt}</th>
                <th>{item.client}</th>
                <th>{item.currency}</th>
                <th>{item.total}</th>
                <th>{item.invoice}</th>
                <th>
                  <button style={{ margin: "10px" }}>View Details</button>
                  <button onClick={() => handleDeleteProduct(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </th>
              </tr>
            )
          })}
        </thead>
      </table>
      <div>{page}</div>
    </div >

  )
}

export default ProducForm