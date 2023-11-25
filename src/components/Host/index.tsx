type Props = {
  host: {
    name?: string
    picture?: string
    id?: string
  }
}

const Host: React.FC<Props> = ({ host }) => {
  return (
    <div className="host">
      <img className="host_img" src={host.picture} alt={host.name} />
      <div className="host_name">
        <p key={host.id}>{host.name}</p>
      </div>
    </div>
  )
}

export default Host
