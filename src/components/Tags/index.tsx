type Props = {
  tags?: string
}

const Tags: React.FC<Props> = ({ tags }) => {
  return <span className="tag">{tags}</span>
}

export default Tags
