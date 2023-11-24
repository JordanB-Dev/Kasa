const Host = ({ host }) => {
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
