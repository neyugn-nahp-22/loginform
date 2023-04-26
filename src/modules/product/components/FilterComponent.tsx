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
  handleFilterStatus(status: string[]): void
}

const FilterComponent = (props: Props) => {
  const { handleFilterStatus } = props

  const filterStatus = STATUS.map((prev) => prev.title)

  return (
    <div className='wrapper'>
      <div>
        <select onChange={() => handleFilterStatus(filterStatus)} className='menu-items' style={{ width: 150 }}>
          {STATUS.map((item, key) => (
            <option key={key} style={item.styles}>{item.title}</option>
          ))}
        </select>
        <select className='menu-items' defaultValue="Client" style={{ width: 150 }}></select>
        <input type='date' className='menu-items' style={{ width: 150 }} placeholder='From' />
        <input type='date' className='menu-items' style={{ width: 150 }} placeholder='To' />
        <input className='menu-items' placeholder='Invoice#' style={{ width: 150 }} />
      </div>
      <div>
        <button style={{ marginRight: "20px", width: 100 }}>Apply</button>
        <button style={{ marginRight: "20px", width: 100 }}>Clear</button>
      </div>
    </div>
  )
}

export default FilterComponent