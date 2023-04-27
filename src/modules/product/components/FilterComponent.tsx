import './Filter.scss';

const STATUS = [
  {
    key: 'pending',
    title: "Pending",
    styles: { color: '#696a67', fontWeight: 600 },
  },
  {
    key: 'received',
    title: "Received",
    styles: { color: '#31a7cb', fontWeight: 600 }
  },
  {
    key: 'processing',
    title: "Processing",
    styles: { color: '#F4b45b', fontWeight: 600 },
  },
  {
    key: 'fulfilled',
    title: "Fulfilled",
    styles: { color: '#5ae839', fontWeight: 600 },
  }
]

interface Props {
  handleFilterStatus(): void
}

const FilterComponent = (props: Props) => {
  const { handleFilterStatus } = props

  const filterStatus = STATUS.map((prev) => prev.title)
  console.log(filterStatus, '123');

  return (
    <div className='wrapper'>
      <div className='d-flex'>
        <select onChange={() => handleFilterStatus} className='form-select' style={{ width: 150 }}>
          {STATUS.map((item, key) => (
            <option key={key} style={item.styles}>{item.title}</option>
          ))}
        </select>
        <select className='form-select' defaultValue="Client" style={{ width: 150 }}></select>
        <input type='date' className='form-control' style={{ width: 150 }} placeholder='From' />
        <input type='date' className='form-control' style={{ width: 150 }} placeholder='To' />
        <input className='form-control' placeholder='Invoice#' style={{ width: 150 }} />
      </div>
      <div>
        <button className='btn btn-outline-primary' style={{ marginRight: "20px", width: 100 }}>Apply</button>
        <button className='btn btn-outline-warning' style={{ marginRight: "20px", width: 100 }}>Clear</button>
      </div>
    </div>
  )
}

export default FilterComponent