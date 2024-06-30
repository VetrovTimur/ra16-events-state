export const ProjectList = (props) => {

    const {projectsList} = props;

  return (
    <>
      <div className="boxImg">
        {projectsList.map((project, index) => (
          <img className='img' key={index} src={project.img} alt="" />
        ))}
      </div>
        
    </>
  )
}
